import numpy as np
from PIL import Image
import colorsys
import json

BACKGROUND_THRESHOLD = 25


# ---------- Utility ----------

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % tuple(int(x) for x in rgb)


def color_distance(c1, c2):
    return np.linalg.norm(np.array(c1) - np.array(c2))


def is_background(pixel, background):
    return color_distance(pixel, background) < BACKGROUND_THRESHOLD


# ---------- Background Detection ----------

def detect_background_color(img):
    h, w, _ = img.shape

    center = img[h//2-50:h//2+50, w//2-50:w//2+50]
    avg = center.mean(axis=(0,1))

    return avg


# ---------- Frame Color Detection ----------

def detect_frame_color(img, background):

    h, w, _ = img.shape

    border_pixels = []

    border_thickness = int(min(h, w) * 0.1)

    top = img[0:border_thickness,:,:]
    bottom = img[h-border_thickness:h,:,:]
    left = img[:,0:border_thickness,:]
    right = img[:,w-border_thickness:w,:]

    borders = [top, bottom, left, right]

    for b in borders:
        pixels = b.reshape(-1,3)

        for p in pixels:
            if not is_background(p, background):
                border_pixels.append(p)

    if len(border_pixels) < 100:
        return background

    pixels = np.array(border_pixels)

    # Quantize to reduce noise
    pixels = (pixels // 10) * 10

    colors, counts = np.unique(pixels, axis=0, return_counts=True)
    dominant = colors[counts.argmax()]

    return dominant


# ---------- Padding Detection ----------

def detect_padding(img, background):

    h, w, _ = img.shape

    top = 0
    bottom = 0
    left = 0
    right = 0

    # top
    for y in range(h):
        if not np.all([is_background(p, background) for p in img[y]]):
            top = y
            break

    # bottom
    for y in range(h-1, -1, -1):
        if not np.all([is_background(p, background) for p in img[y]]):
            bottom = h - y
            break

    # left
    for x in range(w):
        column = img[:,x]
        if not np.all([is_background(p, background) for p in column]):
            left = x
            break

    # right
    for x in range(w-1, -1, -1):
        column = img[:,x]
        if not np.all([is_background(p, background) for p in column]):
            right = w - x
            break

    if top < 20 and right < 20 and bottom < 20 and left < 20:
        return 120, 100, 120, 100 # 12% vertical, 10% horizontal default padding

    return top, right, bottom, left


# ---------- Color Adjustment ----------

def adjust_color(rgb, target_lightness):

    r,g,b = rgb / 255

    h,l,s = colorsys.rgb_to_hls(r,g,b)

    s = max(s, 0.35)   # avoid dull gray colors

    r,g,b = colorsys.hls_to_rgb(h, target_lightness, s)

    return np.array([r*255, g*255, b*255])


# ---------- Main Theme Generator ----------

def generate_theme(image_path):

    img = Image.open(image_path).convert("RGB")
    img = img.resize((1000,1000))

    img = np.array(img)

    background = detect_background_color(img)
    frame_color = detect_frame_color(img, background)

    top,right,bottom,left = detect_padding(img, background)

    bg_lightness = background.mean()

    if bg_lightness > 127:
        # Light background -> Dark text
        heading = adjust_color(frame_color, 0.25)
        label = adjust_color(frame_color, 0.35)
        god = adjust_color(frame_color, 0.30)
        value = adjust_color(frame_color, 0.15)
    else:
        # Dark background -> Light text
        heading = adjust_color(frame_color, 0.85)
        label = adjust_color(frame_color, 0.75)
        god = adjust_color(frame_color, 0.80)
        value = adjust_color(frame_color, 0.95)

    theme = {

        "pageBackgroundColor": "", #rgb_to_hex(background)

        "containerPadding": f"{int((top/1000)*100)}cqi {int((right/1000)*100)}cqi {int((bottom/1000)*100)}cqi {int((left/1000)*100)}cqi",

        "fontFamily": "'Noto Serif', Georgia, serif",

        "headingColor": rgb_to_hex(heading),
        "labelColor": rgb_to_hex(label),
        "valueColor": rgb_to_hex(value),

        "baseFontSize": "2cqi",
        "sectionTitleFontSize": "2.5cqi",

        "sectionSpacing": "1.875cqi",
        "fieldSpacing": "0.75cqi",

        "godIconTextColor": rgb_to_hex(god),
        "godIconFontSize": "2.5cqi",
        "godIconSpacing": "2cqi",

        "godIconHideStrategy": "visibility",

        "profilePhotoTop": "0",
        "profilePhotoRight": "0"

    }

    return theme


# ---------- Run ----------

def main():

    import os
    directory = "."

    for filename in os.listdir(directory):

        if filename.endswith(".png") and filename.startswith("theme-"):

            base = os.path.splitext(filename)[0]
            json_file = base + ".json"
            json_path = os.path.join(directory, json_file)

            if not os.path.exists(json_path):
                print(f"Generating for {filename}...")
                theme = generate_theme(os.path.join(directory, filename))

                with open(json_path, "w") as f:
                    json.dump(theme, f, indent=4)

    print("All missing themes generated successfully")

if __name__ == "__main__":
    main()
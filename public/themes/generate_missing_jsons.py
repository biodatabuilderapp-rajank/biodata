import os
import json
from PIL import Image
import numpy as np


# ---------- Utilities ----------

def rgb_to_hex(rgb):
    return '#{:02X}{:02X}{:02X}'.format(rgb[0], rgb[1], rgb[2])


def brightness(color):
    r, g, b = color
    return (r * 299 + g * 587 + b * 114) / 1000


# ---------- Dominant Color Detection ----------

def get_dominant_colors(image_path, num_colors=10):

    img = Image.open(image_path).convert("RGB")
    img = img.resize((150, 150), Image.Resampling.LANCZOS)

    quantized = img.quantize(colors=num_colors)

    colors = quantized.getcolors()
    colors.sort(reverse=True)

    palette = []

    for count, color_index in colors:
        palette_rgb = quantized.getpalette()[color_index*3:color_index*3+3]
        palette.append(tuple(palette_rgb))

    return palette


# ---------- Frame Color Detection ----------

def detect_frame_color(image_path):

    img = Image.open(image_path).convert("RGB")
    w, h = img.size

    pixels = np.array(img)

    border_pixels = []

    border_pixels.extend(pixels[0])       # top
    border_pixels.extend(pixels[h-1])     # bottom
    border_pixels.extend(pixels[:,0])     # left
    border_pixels.extend(pixels[:,w-1])   # right

    avg = np.mean(border_pixels, axis=0)

    return tuple(avg.astype(int))


# ---------- Safe Padding Detection ----------

def detect_padding(image_path):

    img = Image.open(image_path).convert("RGB")
    w, h = img.size

    pixels = np.array(img)

    bg = pixels[h//2][w//2]

    threshold = 15

    top = 0
    for y in range(h):
        if np.linalg.norm(pixels[y][w//2] - bg) < threshold:
            top = y
            break

    left = 0
    for x in range(w):
        if np.linalg.norm(pixels[h//2][x] - bg) < threshold:
            left = x
            break

    padding_y = int((top / h) * 100)
    padding_x = int((left / w) * 100)

    return f"{padding_y}cqi {padding_x}cqi 0"


# ---------- Theme Color Logic ----------

def generate_theme_colors(bg_color):

    bg_brightness = brightness(bg_color)

    if bg_brightness > 150:

        return {
            "godIconTextColor": "#7A1E2C",
            "headingColor": "#8A5A12",
            "labelColor": "#5C4A36",
            "valueColor": "#1A1A1A"
        }

    else:

        return {
            "godIconTextColor": "#FFE6A3",
            "headingColor": "#E6C36A",
            "labelColor": "#E6E6E6",
            "valueColor": "#FFFFFF"
        }


# ---------- JSON Generator ----------

def generate_json_for_image(image_path, json_path):

    print(f"Processing {image_path}...")

    palette = get_dominant_colors(image_path)

    bg_color = palette[0]

    colors = generate_theme_colors(bg_color)

    padding = detect_padding(image_path)

    frame_color = detect_frame_color(image_path)

    data = {
        "pageBackgroundColor": rgb_to_hex(bg_color),
        "containerPadding": padding,
        "fontFamily": "'Noto Serif', Georgia, serif",
        "headingColor": colors["headingColor"],
        "labelColor": colors["labelColor"],
        "valueColor": colors["valueColor"],
        "baseFontSize": "2cqi",
        "sectionTitleFontSize": "2.5cqi",
        "sectionSpacing": "1.875cqi",
        "fieldSpacing": "0.75cqi",
        "godIconTextColor": colors["godIconTextColor"],
        "godIconFontSize": "2.5cqi",
        "godIconSpacing": "2cqi",
        "godIconHideStrategy": "visibility",
        "profilePhotoTop": "0",
        "profilePhotoRight": "0",
        "detectedFrameColor": rgb_to_hex(frame_color)
    }

    with open(json_path, "w") as f:
        json.dump(data, f, indent=4)

    print(f"Generated {json_path}")


# ---------- Runner ----------

def main():

    directory = "."

    for filename in os.listdir(directory):

        if filename.endswith(".png") and filename.startswith("theme-"):

            base = os.path.splitext(filename)[0]

            json_file = base + ".json"

            json_path = os.path.join(directory, json_file)

            if not os.path.exists(json_path):

                image_path = os.path.join(directory, filename)

                generate_json_for_image(image_path, json_path)


if __name__ == "__main__":
    main()

import os
import json
from PIL import Image
import numpy as np
import colorsys

# ---------- Utilities ----------

def rgb_to_hex(rgb):
    return '#{:02X}{:02X}{:02X}'.format(rgb[0], rgb[1], rgb[2])

def brightness(color):
    r, g, b = color
    return (r * 299 + g * 587 + b * 114) / 1000

def adjust_color(rgb, target_l):
    """
    Takes an RGB tuple, converts to HSL, forces Lightness to target_l,
    and returns an RGB hex string.
    """
    r, g, b = [x / 255.0 for x in rgb]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    
    new_r, new_g, new_b = colorsys.hls_to_rgb(h, target_l, s)
    return rgb_to_hex((int(new_r * 255), int(new_g * 255), int(new_b * 255)))

# ---------- Frame Color Detection ----------

def detect_frame_color(image_path):
    img = Image.open(image_path).convert("RGB")
    # Downscale for performance during frame detection
    img = img.resize((150, 150), Image.Resampling.LANCZOS)
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

def detect_padding_and_center(image_path):
    img = Image.open(image_path).convert("RGB")
    w, h = img.size
    pixels = np.array(img)

    # Use the precise center pixel to understand if the text area is light or dark
    center_color = pixels[h//2][w//2]
    threshold = 15

    top = 0
    for y in range(h):
        if np.linalg.norm(pixels[y][w//2] - center_color) < threshold:
            top = y
            break

    left = 0
    for x in range(w):
        if np.linalg.norm(pixels[h//2][x] - center_color) < threshold:
            left = x
            break

    padding_y = int((top / h) * 100)
    padding_x = int((left / w) * 100)

    return f"{padding_y}cqi {padding_x}cqi 0", tuple(center_color.astype(int))

# ---------- Theme Color Logic ----------

def generate_theme_colors(center_color, frame_color):
    center_brightness = brightness(center_color)

    # 1. Darken or lighten the dominent frame color to use for the text fields
    if center_brightness > 150:
        # Light Background -> We need dark text (low Lightness)
        heading_color = adjust_color(frame_color, 0.25)
        label_color = adjust_color(frame_color, 0.35)
        god_icon_color = adjust_color(frame_color, 0.30)
        value_color = "#1A1A1A"  # Always solid dark for readablity
    else:
        # Dark Background -> We need light text (high Lightness)
        heading_color = adjust_color(frame_color, 0.85)
        label_color = adjust_color(frame_color, 0.75)
        god_icon_color = adjust_color(frame_color, 0.80)
        value_color = "#FFFFFF"  # Always solid light for readability

    return {
        "godIconTextColor": god_icon_color,
        "headingColor": heading_color,
        "labelColor": label_color,
        "valueColor": value_color
    }


# ---------- JSON Generator ----------

def generate_json_for_image(image_path, json_path):
    print(f"Processing {image_path}...")

    # Extract padding and visual anchors
    padding, center_color = detect_padding_and_center(image_path)
    frame_color = detect_frame_color(image_path)
    
    # Generate text colors derived from the border aesthetics
    colors = generate_theme_colors(center_color, frame_color)

    data = {
        "pageBackgroundColor": "", # Enforced empty per user requirement
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

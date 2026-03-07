import json
import os

ordered_keys = [
    "pageBackgroundColor",
    "containerPadding",
    "fontFamily",
    "headingColor",
    "labelColor",
    "valueColor",
    "baseFontSize",
    "sectionTitleFontSize",
    "sectionSpacing",
    "fieldSpacing",
    "godIconTextColor",
    "godIconFontSize",
    "godIconSpacing",
    "godIconHideStrategy",
    "profilePhotoTop",
    "profilePhotoRight"
]

count = 0
for fname in os.listdir("."):
    if not fname.endswith(".json"):
        continue
    with open(fname) as f:
        data = json.load(f)
        
    # Set default strategy
    if "godIconHideStrategy" not in data:
        data["godIconHideStrategy"] = "visibility"
        
    new_data = {}
    for k in ordered_keys:
        if k in data:
            new_data[k] = data[k]
            
    for k in data.keys():
        if k not in new_data:
            new_data[k] = data[k]
            
    with open(fname, "w") as f:
        json.dump(new_data, f, indent=4)
        
    count += 1

print(f"Successfully added godIconHideStrategy to {count} JSON files.")

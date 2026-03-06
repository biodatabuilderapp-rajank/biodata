import json, os, re

def add_6_cqi(match):
    val = float(match.group(1))
    new_val = val + 6.0
    if new_val.is_integer():
        return f"{int(new_val)}cqi"
    else:
        return f"{round(new_val, 3)}cqi".replace('.0cqi', 'cqi')

keys_to_update = ['containerPadding', 'profilePhotoTop', 'profilePhotoRight']

count = 0
for fname in os.listdir('.'):
    if not fname.endswith('.json'): continue
    with open(fname) as f:
        data = json.load(f)
    
    changed = False
    for key in keys_to_update:
        if key in data and isinstance(data[key], str):
            old_val = data[key]
            new_val = re.sub(r'([\d\.]+)cqi', add_6_cqi, old_val)
            if new_val != old_val:
                data[key] = new_val
                changed = True
                
    if changed:
        with open(fname, 'w') as f:
            json.dump(data, f, indent=4)
        count += 1
print(f"Added 6cqi to {count} theme files to compensate for removed outer padding.")

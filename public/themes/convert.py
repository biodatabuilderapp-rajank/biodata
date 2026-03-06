import json, os, re

def to_cqi(val_str):
    def repl(m):
        val = float(m.group(1))
        unit = m.group(2)
        if unit == 'px' or unit is None:
            cqi = val / 8.0
        elif unit == 'rem':
            cqi = (val * 16.0) / 8.0
        elif unit == '%':
            return m.group(0)
        else:
            return m.group(0)
            
        if cqi.is_integer():
            return f"{int(cqi)}cqi"
        else:
            return f"{round(cqi, 3)}cqi".replace('.0cqi', 'cqi')

    return re.sub(r'([\d\.]+)(px|rem|em|%)?', repl, val_str)

keys_to_convert = [
    'containerPadding', 'profilePhotoTop', 'profilePhotoRight', 
    'baseFontSize', 'sectionTitleFontSize', 'sectionSpacing', 
    'fieldSpacing', 'godIconSpacing'
]

count = 0
for fname in os.listdir('.'):
    if not fname.endswith('.json'): continue
    with open(fname) as f:
        data = json.load(f)
    changed = False
    for k in keys_to_convert:
        if k in data and isinstance(data[k], str):
            if 'cqi' not in data[k]:
                data[k] = to_cqi(data[k])
                changed = True
    if changed:
        with open(fname, 'w') as f:
            json.dump(data, f, indent=4)
        count += 1
print(f"Converted {count} files.")

import os, re

for root, dirs, files in os.walk('src/app'):
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Simple check if there's no openGraph but there is metadata
            if 'export const metadata: Metadata =' in content or 'export const metadata =' in content:
                if 'openGraph:' not in content:
                    title_m = re.search(r'title:\s*("[^"]+"|\'[^\']+\')', content)
                    desc_m = re.search(r'description:\s*("[^"]+"|\'[^\']+\')', content)
                    canon_m = re.search(r'canonical:\s*("[^"]+"|\'[^\']+\')', content)
                    
                    if title_m and desc_m and canon_m:
                        title = title_m.group(1)
                        desc = desc_m.group(1)
                        canon = canon_m.group(1)
                        
                        og_str = f"openGraph: {{\n    title: {title},\n    description: {desc},\n    url: {canon},\n  }},"
                        
                        # Find alternates: { canonical: ... }, and replace with itself + openGraph
                        new_content = re.sub(r'(alternates:\s*\{\s*canonical:\s*("[^"]+"|\'[^\']+\')\s*\},)', r'\1\n  ' + og_str.replace('\\', '\\\\'), content)
                        
                        if new_content != content:
                            with open(filepath, 'w') as f:
                                f.write(new_content)
                            print(f'Fixed {filepath}')

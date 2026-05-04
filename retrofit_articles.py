import os, re

for root, dirs, files in os.walk('src/app/articles'):
    # don't touch layout.tsx
    if root == 'src/app/articles': continue
    
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            if '<ArticleCTA' not in content:
                imports_to_add = []
                if 'ArticleCTA' not in content:
                    imports_to_add.append('import ArticleCTA from "@/components/ArticleCTA";')
                if 'ArticleLanguageNav' not in content:
                    imports_to_add.append('import ArticleLanguageNav from "@/components/ArticleLanguageNav";')
                
                # add imports after the last import line
                import_lines = [line for line in content.split('\n') if line.startswith('import ')]
                if import_lines:
                    last_import = import_lines[-1]
                    new_imports = '\n'.join(imports_to_add)
                    content = content.replace(last_import, f"{last_import}\n{new_imports}")
                else:
                    new_imports = '\n'.join(imports_to_add)
                    content = f"{new_imports}\n{content}"

                # Add the components exactly before </ArticleWrapper>
                # Also, add an internal contextual linking paragraph just before them
                
                linking_paragraph = """
        <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What's Next?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            If you found this guide helpful, you might also want to read our <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">master guide on biodata photo tips and mistakes to avoid</Link>. Or, if you're exploring styles, check out the <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">differences between modern and traditional formats</Link>.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Once you're ready, you can use our <strong>biodata builder to create your profile instantly</strong> without any design skills.
          </p>
        </div>"""
                
                components = f"{linking_paragraph}\n\n        <ArticleLanguageNav />\n        <ArticleCTA />\n      </ArticleWrapper>"
                
                content = content.replace('</ArticleWrapper>', components)
                
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f'Retrofit {filepath}')

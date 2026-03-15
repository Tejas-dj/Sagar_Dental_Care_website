import os
import re

files_to_process = [
    'src/app/page.tsx',
    'src/app/home.module.css',
    'src/app/about/page.tsx',
    'src/app/about/about.module.css',
    'src/app/contact/page.tsx',
    'src/app/contact/contact.module.css',
    'src/app/gallery/page.tsx',
    'src/app/gallery/gallery.module.css',
    'src/components/layout/Navbar.tsx',
    'src/components/layout/Footer.tsx',
    'src/app/treatments/page.tsx',
    'src/app/treatments/treatments.module.css',
    'src/app/treatments/[slug]/page.tsx',
    'src/app/treatments/[slug]/detail.module.css',
    'src/app/globals.css',
    'src/components/layout/Navbar.module.css'
]

base_dir = r"c:\Users\Tejas.D.Jaiprakash\Desktop\Webpages\SagarDentalCare_FINAL"

for fpath in files_to_process:
    full_path = os.path.join(base_dir, fpath)
    if not os.path.exists(full_path):
        continue
        
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match typical AI structural headers
    # {/* ═══ HERO ═══════════════════════════════ */}
    content = re.sub(r'\{\s*/\*\s*[═─]+.*?[═─]+\s*\*/\s*\}\n?', '', content)
    # /* ═══════════════════════════════════════════════
    #    HOME PAGE STYLES
    #    ═══════════════════════════════════════════════ */
    content = re.sub(r'/\*\s*[═─]+.*?[\r\n]+.*?[═─]+\s*\*/\n?', '', content)
    # /* ── Split Layout ──────────────────────────── */
    content = re.sub(r'/\*\s*[═─]+.*?[═─]+\s*\*/\n?', '', content)
    
    # /* ... (Previous code remains, adding keyframes and border to cards) */
    content = re.sub(r'/\*\s*\.\.\..*?\*/\n?', '', content)
    
    # // Replaced Title with SplitText
    content = re.sub(r'^\s*//\s*(?:Replaced|Added|Removed|Update|Google|Scroll|Mobile|Desktop).*?\n', '', content, flags=re.MULTILINE | re.IGNORECASE)
    
    # Remove simple { /* comments */ } if they look like section headers
    content = re.sub(r'\{\s*/\*\s*(?:Logo|Menu|Mobile|Desktop|Hero|About|Services|Contact|Gallery|Testimonials|Rating|Navbar|Footer).*?\*/\s*\}\n?', '', content, flags=re.IGNORECASE)
    
    # Remove inline comments like // Increased delay...
    content = re.sub(r'//\s*(?:Increased|Wait|Hide|Show|Consistent).*?\n', '\n', content, flags=re.IGNORECASE)
    
    # Reduce multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.lstrip())
        
print("Comment removal complete.")

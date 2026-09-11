# Shakir Hussain — Portfolio Website

Yeh folder Shakir Hussain (Full Stack Developer) ke portfolio website ki complete files hain.

## Folder Structure
```
portfolio-package/
├── index.html          → main page
├── css/
│   └── style.css        → sara styling yahan hai
├── js/
│   └── script.js        → project image slider ka logic
├── images/
│   ├── shakir-photo.jpg → hero section ki photo (placeholder)
│   └── project*-shot*.jpg → har project ki 3 images (placeholder)
└── README.md            → yeh file
```

## Kaise Use Karein
1. Poori `portfolio-package` folder ko kisi bhi jagah rakh do.
2. `index.html` ko double-click karke browser mein khol lo — website chal jayegi.
3. Online daalne ke liye (GitHub Pages, Netlify, Vercel, Hostinger, waghera) — poori folder upload kar do.

## Customize Kaise Karein

### 1. Apni Photos Lagana
`images/` folder mein jo files hain unhi naam se apni images replace kar do (same naam rakhna zaroori hai, ya index.html mein path change kar dena):
- `shakir-photo.jpg` → Shakir ki asli professional photo
- `project1-shot1.jpg`, `project1-shot2.jpg`, `project1-shot3.jpg` → Project 1 ki screenshots
- `project2-shot1.jpg` se `project2-shot3.jpg` → Project 2 ki screenshots
- `project3-shot1.jpg` se `project3-shot3.jpg` → Project 3 ki screenshots

Best size: photo ke liye ~640×480px, project screenshots ke liye ~800×450px (16:9).

### 2. Text/Content Change Karna
`index.html` file kisi bhi text editor (Notepad, VS Code) mein kholo aur yeh cheezein dhoondo:
- **Projects** — "Project One/Two/Three", description, aur tech tags (`<span>React</span>` waghera)
- **Experience** — company names, dates, role descriptions
- **Contact** — email, GitHub link, LinkedIn link (`href="#"` ko apne real links se replace karo)
- **About section** — bio text
- **"X+ years"** — actual experience ka number

### 3. Colors Change Karna
`css/style.css` file ke shuru mein `:root` section hai jahan sab colors defined hain:
```css
--ink:#0F1B2D;      /* dark text/headings */
--paper:#F1EEF7;    /* background */
--brass:#B8875B;    /- accent color */
--lilac:#C9BFE8;    /* pastel purple */
--mint:#A9D4C3;     /* pastel green */
--peach:#F0C9A8;    /* pastel orange */
```
Inhe change karke poori site ka color theme badal sakte ho.

## Notes
- Yeh site pure HTML/CSS/JS mein hai — koi framework install karne ki zaroorat nahi.
- Project slider ka code `js/script.js` mein hai, dots aur arrows dono kaam karte hain.
- Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) Google Fonts se load hote hain — internet chahiye first load pe.

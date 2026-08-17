# 🎓 andrizre.github.io — Professional Academic & Developer Portfolio

A modern, high-performance, and formal developer portfolio built specifically for **GitHub Pages** deployment (`https://andrizre.github.io/`), inspired by the clean editorial elegance of academic portfolio sites (such as [byminji.github.io](https://byminji.github.io/)) and enhanced with executive interactive features.

---

## ✨ Features & Highlights

- **🏛️ Academic & Formal Layout**: Two-column layout with a fixed profile sidebar and a fluid reading pane with crisp typography (`Plus Jakarta Sans`, `Newsreader`, `JetBrains Mono`).
- **🌓 Dual Theme Architecture**: Integrated Light & Dark modes with system detection and persistent preference.
- **⚡ Command Palette (`Ctrl+K` / `⌘K`)**: Instant fuzzy search across projects, technical papers, skills, and navigation sections.
- **💼 Interactive Project Showcase**: Filter by `Web Applications`, `Bots & Automation`, `Developer Tools`, and `Open Source` with rich modal case studies.
- **📄 Academic Publications & Writing**: Section for technical whitepapers, articles, and research with expandable abstracts and 1-click **BibTeX** citation copying.
- **⏱️ Live Timezone Clock**: Dynamic real-time clock displaying local time (`WIB / UTC+7`) in the sidebar.
- **🖨️ Print / PDF Ready Resume**: Optimized `@media print` CSS so you can press **Ctrl+P** or click the Print icon to instantly generate a 2-page executive CV.
- **🚀 Zero-Build GitHub Pages Ready**: Pure native HTML5, CSS3, and JavaScript. No build step or node_modules dependencies needed.

---

## 🚀 How to Deploy to GitHub Pages (`andrizre.github.io`)

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to: **`andrizre.github.io`** (Must match your GitHub username).
3. Set the repository visibility to **Public**.
4. Do **not** initialize with a README, .gitignore, or license (this project already includes them).

### Step 2: Push Your Code
Open your terminal in this directory (`C:\Users\Lenovo\andrizre.github.io`) and run:

```bash
git init
git add .
git commit -m "Initial commit: professional github.io portfolio"
git branch -M main
git remote add origin https://github.com/andrizre/andrizre.github.io.git
git push -u origin main
```

### Step 3: Activate GitHub Pages
1. Go to your repository on GitHub: `https://github.com/andrizre/andrizre.github.io`.
2. Navigate to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
5. Your website will be live in ~1 minute at:
   👉 **`https://andrizre.github.io/`**

---

## 🛠️ How to Customize Your Content

All data is separated cleanly from presentation in a single configuration file:
👉 **[`assets/js/data.js`](assets/js/data.js)**

You can update:
- **`profile`**: Your name, titles, affiliations, avatar image URL, email, and social links.
- **`metrics`**: Stats counter cards (Years of Experience, Projects, etc.).
- **`about`**: Biography paragraphs and core engineering focus tags.
- **`experience`**: Work history, company details, responsibilities, and technologies.
- **`education`**: Degree, institution, GPA/honors, and timeline.
- **`projects`**: Project titles, categories, GitHub repos, live demo links, and case study descriptions.
- **`publications`**: Academic papers, technical guides, abstracts, and BibTeX snippets.
- **`skills`**: Skill matrices across languages, frontend, backend, automation, and DevOps.

---

## 💻 Local Preview

To preview the website locally on your computer:

### Option A: Direct Open
Simply double-click [`index.html`](index.html) to open it in your web browser.

### Option B: Using Python (Recommended)
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Option C: Using Node / Bun / Vite
```bash
npx serve .
```

---

## 📜 License
MIT License. Feel free to use and modify for your personal portfolio.

<<<<<<< HEAD
# my_portfolio
=======
### 🚀 How to Deploy to GitHub Pages

#### 📝 Step 1: Push Project to GitHub

Make sure your project is on GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

> Replace `your-username/your-repo-name` with your actual GitHub repository URL.

---

#### ⚙️ Step 2: Install `gh-pages`

In your project directory, run:

```bash
npm install gh-pages --save-dev
```

---

#### 📦 Step 3: Configure `package.json`

Update your `package.json` with these additions:

1. **Add homepage field**:

```json
"homepage": "https://your-username.github.io/your-repo-name",
```

2. **Add deploy scripts**:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

#### 🔨 Step 4: Build & Deploy

```bash
npm run deploy
```

This will:

* Build the project
* Push the `build/` folder to the `gh-pages` branch
* Make your site live at:
  👉 `https://your-username.github.io/your-repo-name`

---

#### ♻️ After Code Changes

Each time you update the code:

```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

---

>>>>>>> 8e9c454 (Initial commit)

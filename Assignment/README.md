# VietTravel — Static Site

This is a small static travel site for "VietTravel". It includes pages for home, destinations, gallery, blog posts, a map with embedded video, and a contact form.

Contents
- `index.html` — Home / hero
- `about.html` — About the site
- `destinations.html` — Destination pages and itineraries
- `gallery.html` — Photo gallery
- `blog.html`, `post-1.html`, `post-2.html` — Blog and posts
- `map.html` — Embedded map and video
- `contact.html` — Contact form
- `policy.html` — Privacy & policy page
- `assets/` — CSS, JS, icons, and images

Preview locally
1. Open `index.html` in your browser (double-click) to preview the static site.
2. For a simple local HTTP server (recommended) use Python 3.x from the `Assignment/` folder:

```powershell
# from PowerShell in the Assignment folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages
1. Create a new GitHub repository (e.g., `viettravel-site`) and push the contents of this `Assignment/` folder to the repository root on the `main` branch.
2. In the repository Settings → Pages, set the source to `main` branch and folder `/ (root)` and save.
3. Wait a few minutes and open the published URL (e.g., `https://<your-username>.github.io/viettravel-site/`).

Helpful commands (PowerShell)
```powershell
cd 'C:\Users\<you>\Desktop\WebApp\Assignment'
git init
git add .
git commit -m "Initial VietTravel site"
git remote add origin https://github.com/<your-username>/viettravel-site.git
git branch -M main
git push -u origin main
```

Notes & next steps
- The site uses relative paths for assets (e.g., `assets/css/style.css`) which works well on GitHub Pages.
- Consider optimizing images (generate thumbnails, webp) before deploying to reduce load times.
- If you want a custom domain, add a `CNAME` file and configure DNS; I can help.

Credits
- Built as a lightweight static site with vanilla HTML/CSS/JS.

---
If you'd like, I can also:
- Add a simple `404.html` page.
- Create a GitHub Actions workflow to automatically build/deploy (not necessary for static files, but possible).
- Generate optimized images and update `gallery.html` with srcset.

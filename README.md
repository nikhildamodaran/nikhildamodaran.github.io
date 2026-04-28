# nikhildamodaran.github.io

Source files for my academic webpage at <https://nikhildamodaran.github.io/>.

Built with [Quarto](https://quarto.org/). Edit the `.qmd` files, run `deploy.sh` to publish.

---

## To deploy

```bash
./deploy.sh
```

Renders the site, commits, and pushes in one step.

---

## Folder structure

**Root** — config files, sort to the top with `_` prefix

- `index.qmd` — the landing page (custom layout, no Quarto chrome)
- `_quarto.yml` — site-wide settings (theme, navbar, output folder)
- `_styles/` — CSS for the landing page only
- `_scripts/` — JavaScript for the landing page (scroll fade-in)
- `deploy.sh` — run this to render and publish the site
- `docs/` — compiled HTML output, do not edit by hand

**pictures/** — profile photos used on the landing page
- LSU picture (2018)
- UoM picture (2024)

**cv/**
- `index.qmd` — CV page, embeds the PDF in an iframe
- `ND_Mar24.pdf` — the CV file (replace when updating, update filename in `index.qmd`)

**blogs/**
- `index.qmd` — listing page, links to Word files
- Word files — the actual articles, linked for download

**notes/**
- `index.qmd` — listing page for lecture notes
- `reading-list.qmd` — reading list (a) on economic growth - because I was reading the old literature.
- `intro-macro.qmd` - intro macro lecture notes - combining all the thinking that I have done since the first time I taught this course in 2018.


**research-notes/**
- `index.qmd` — research notes 

---



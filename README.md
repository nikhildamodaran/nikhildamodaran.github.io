# nikhildamodaran.github.io

Source files for my academic webpage at <https://nikhildamodaran.github.io/>.

Built with [Quarto](https://quarto.org/). Edit the `.qmd` files, run `quarto render .` from the root, and push. Compiled HTML lands in `docs/`, which GitHub Pages serves.

---

## Folder structure

**Root** — config files, sort to the top with `_` prefix

- `index.qmd` — the landing page (custom layout, no Quarto chrome)
- `_quarto.yml` — site-wide settings (theme, navbar, output folder)
- `_styles/` — CSS for the landing page only
- `_scripts/` — JavaScript for the landing page (scroll fade-in)
- `docs/` — compiled HTML output, do not edit by hand

**pictures/** — profile photos used on the landing page
- LSU picture (2018)
- UoM picture (2024)

**cv/**
- `index.qmd` — CV page, embeds the PDF in an iframe
- `ND_Mar24.pdf` — the CV file (replace when updating, update filename in `index.qmd`)

**blogs/**
- `index.qmd` — the one file that contains all write-ups and the listing page; this is the only file you edit here
- downloadable word files linked.


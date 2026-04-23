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

**cv/**
- `index.qmd` — CV page, embeds the PDF in an iframe
- `ND_Mar24.pdf` — the CV file (replace when updating, update filename in `index.qmd`)

**blogs/**
- `index.qmd` — the one file that contains all write-ups and the listing page; this is the only file you edit here
- `1-breaking-the-value-chain.docx` — Macroeconomic effects of reverse migration, Indian Express, April 2020
- `2-rbi-state-financing-ump.docx` — RBI's unconventional monetary policy, Indian Express, April 2020
- `3-financing state expenditure in the post GST era.docx` — Masala bonds and state finance, New Indian Express, February 2021
- `4-farm laws and some conjectures.docx` — Farm law protests, The Pioneer, February 2021
- `5-who pays for the wall.docx` — Farm protests and the budget, Indian Express, February 2021
- `6-inflation tax and the burden of public debt.docx` — Inflation tax, New Indian Express, March 2021
- `7-the_need_for_public_in_the_policy.docx` — Public in public policy, Indian Express, March 2021
- `8-What am I meant to write.docx` — Personal essay on writing

**notes/**
- `index.qmd` — listing page for lecture notes
- `reading-list.qmd` — reading list
- add more `.qmd` files here for new topics

**research-notes/**
- `index.qmd` — research notes (not linked from the homepage)

---

## How blogs/index.qmd is structured

All blog content lives in a single file. It has three parts:

**1. A list at the top** — one line per post, clicking a title shows that post and hides the rest:
```
- [Post title](javascript:void(0)){onclick="showBlog('blog-9')"}  [— *Publication*, Month Year]{.post-meta}
```

**2. A content block per post** — each post is wrapped in a div:
```
::: {#blog-9 .blog-post}
<button class="back-btn" onclick="showList()">← Back to all posts</button>

[paste converted markdown content here]

:::
```

**3. A `<script>` block at the bottom** — handles show/hide, do not edit.

---

## Workflows

### Add a new blog post

1. Write in Word, save the `.docx` in `blogs/`
2. Convert to markdown in Terminal:
   ```
   pandoc your-file.docx -f docx -t markdown
   ```
3. Copy the output
4. Open `blogs/index.qmd` and:
   - Add a line to the list at the top (increment the blog number)
   - Add a new content block (copy an existing `:::` block, update the number, paste content)
5. Run `quarto render .` and push

### Publish any change

```
quarto render .
git add -A
git commit -m "describe what changed"
git push
```

### Update the CV

1. Replace the PDF in `cv/`
2. Update the filename in `cv/index.qmd`
3. Run `quarto render .` and push

### Add a new notes page

1. Create a `.qmd` file in `notes/` (e.g. `notes/macro-lecture-1.qmd`)
2. Add a YAML header at the top (copy from an existing notes file)
3. Link to it from `notes/index.qmd`
4. Run `quarto render .` and push

---

## Pages not linked from the homepage

These are live but not advertised — share the URL directly.

| Page | URL |
|---|---|
| CV | `/cv/` |
| General Writing | `/blogs/` |
| Lecture Notes | `/notes/` |
| Research Notes | `/research-notes/` |

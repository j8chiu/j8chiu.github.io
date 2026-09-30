# Jiacheng Qiu — academic website

Personal academic website built with Jekyll and hosted at https://j8chiu.github.io.

## Content

- `_config.yml`: identity, contact details, search metadata, and last-updated label.
- `index.md`: introduction and page structure.
- `_data/profile.yml`: research experience.
- `_data/publications.yml`: publication details, authors, figures, and resource links.
- `_includes/publication-list.html`: publication layout and accessible resource links.
- `assets/css/publications.css`: responsive publication typography and figures.
- `_data/moments.yml`: gallery captions, alt text, and thumbnail dimensions.
- `_includes/gallery.html`: three visible photographs and an expandable remaining gallery.
- `_layouts/homepage.html`: semantic page layout and navigation.
- `_sass/refinements.scss`: responsive profile, content, and gallery styles.

## Local preview

Use the dependencies pinned by `Gemfile.lock` with a compatible Ruby installation:

```sh
bundle install
bundle exec jekyll serve --safe --destination /tmp/jiacheng-site
```

Keep generated output outside the source checkout. The legacy tracked `_site` directory is not the source of truth; edit the source files above.

## Documents and privacy

The website has no résumé download link. `_config.yml` excludes `assets/files` and the legacy `_site` directory, so source documents are not copied into a fresh Jekyll build. The latest private résumé is not part of this repository and must not be added.

These exclusions take effect on the next deployment. They do not remove previously committed files from GitHub's repository or history, or remove documents from an already-deployed version. Keep deployment configured to build with Jekyll; do not upload the source directory directly as the public site.

## Before publishing

1. Check affiliation, dates, email, and last-updated label.
2. Build and confirm that no résumé/CV or `assets/files` directory appears in the generated site.
3. Check local links, section navigation, and the expandable gallery.
4. Inspect desktop and phone layouts, keyboard focus, and light/dark appearance.
5. Review the diff and publish through the existing GitHub Pages workflow.

Gallery images use compressed WebP thumbnails; original photographs remain unchanged. Add optimized display images and update `_data/moments.yml` for future photos.

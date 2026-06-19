---
title: Writing Guide
date: 2026-06-19
draft: true
author:
  name: Your Name
description: "Every element this theme can render — keep this draft open when writing."
tags:
  - meta
categories:
  - Meta
---

This post stays as `draft: true` permanently. It's a reference, not a real post.
Each section shows an element and exactly how to write it.

---

## Headings

The post `title` in front matter is already the h1. Use `##` for sections and `###` for subsections inside the post body.

```
## Main section
### Subsection
```

Avoid `#` inside the body — it creates a second h1, which is bad for SEO and screen readers.

---

## Body text

Plain prose needs no syntax.

**Bold** is `**word**`. Use it for genuine emphasis — a term, a warning, a key idea.

*Italic* is `*word*`. In this theme it renders in Playfair Display in the accent colour, so it carries visual weight. Use it for titles of things, foreign words, or a word you want to land softly but distinctly.

~~Strikethrough~~ is `~~word~~`. Useful for showing something removed or wrong.

---

## Highlight

`==double equals==` wraps text in a background highlight tint.

```
The ==critical point== is buried in the middle of the paragraph.
```

The ==critical point== is buried in the middle of the paragraph.

Use sparingly — one or two per post at most.

---

## Links

```
[link text](https://example.com)
```

Links in prose render in the accent colour: [example link](https://example.com).

For external links, no special syntax is needed — the theme handles styling.

---

## Blockquote

Blockquotes get a terracotta left border and render in Playfair Display italic. Good for:
- Pull quotes
- Callouts and notes
- Warnings

```
> The best way to get started is to quit talking and begin doing.
> — Walt Disney
```

> The best way to get started is to quit talking and begin doing.
> — Walt Disney

For a note-style callout, lead with bold:

```
> **Note:** Hugo rebuilds the full site on every save. This is expected.
```

> **Note:** Hugo rebuilds the full site on every save. This is expected.

---

## Code — inline

Single backticks for short snippets: `` `hugo server -D` `` → `hugo server -D`

Good for: command names, file paths, variable names, keyboard shortcuts.

---

## Code — block

Triple backticks with a language label for syntax highlighting.

~~~
```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```
~~~

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

```bash
hugo server -D
git push origin main
```

Common labels: `python` `bash` `css` `javascript` `go` `sql` `toml` `yaml` `json` `html`

A copy button appears on hover — no extra setup needed.

---

## Lists

**Unordered:**

```
- Item one
- Item two
  - Nested item
- Item three
```

- Item one
- Item two
  - Nested item
- Item three

**Ordered:**

```
1. First step
2. Second step
3. Third step
```

1. First step
2. Second step
3. Third step

---

## Task list

```
- [x] Already done
- [ ] Still to do
- [ ] Another pending item
```

- [x] Already done
- [ ] Still to do
- [ ] Another pending item

---

## Table

```
| Column A | Column B | Column C |
|---|---|---|
| value    | value    | value    |
```

| Tool | Purpose | Free |
|---|---|---|
| Hugo | Static site generator | ✅ |
| Cloudflare Pages | Hosting | ✅ |
| GitHub | Source control | ✅ |

---

## Images

Place images in the same folder as `index.md` (page bundle). Reference by filename only.

```
![Alt text describing the image](filename.png)
```

Click any image to expand it fullscreen. Click anywhere or press `Escape` to close.

---

## Image with caption

Use Hugo's built-in `figure` shortcode when you need a caption:

```
{{</* figure src="filename.png" caption="Caption text here" */>}}
```

---

## Footnotes

```
Some claim Vim is the best editor.[^1] Others disagree.[^2]

[^1]: They are correct.
[^2]: They are wrong.
```

Some claim Vim is the best editor.[^1] Others disagree.[^2]

[^1]: They are correct.
[^2]: They are wrong.

Footnotes are numbered automatically and linked — clicking jumps to the note at the bottom.

---

## Horizontal rule

`---` on its own line draws a thin divider. Use it to separate major sections that don't need a heading.

---

## Front matter reference

```yaml
---
title: Post Title Here
date: 2026-06-19
draft: false          # true = never publishes; false = live
author:
  name: Your Name
description: "One sentence shown in the post list and meta tags."
featuredImage: "cover.png"   # optional — omit if no cover image
tags:
  - tag-one
  - tag-two
categories:
  - Category
---
```

Write with `draft: true`. Flip to `false` when ready to publish, then commit and push.

# PSOrvia Klangebirge

**Lanț muntos din linii reactiv la audio pentru site-ul tău**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo live cu muzică](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Un peisaj liniștit din linii ca fundal al paginii. Spectrul modelează munții: basul devine masive largi, sunetele înalte vârfuri înguste. Zbori printr-o vale. Reacționează la orice audio și video din pagină și se estompează în spatele textului tău. Fără muzică peisajul se odihnește; cu mișcare redusă rămâne o imagine statică.

## Utilizare

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atribute

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Culorile liniilor, temă întunecată |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Culorile liniilor, temă luminoasă |
| `opacity` | `1 (0-1)` | Opacitate |
| `reactivity` | `1 (0-3)` | Intensitatea reacției |
| `horizon` | `0.5 (0.2-0.9)` | Înălțimea orizontului |
| `audio` | `audio, video` | Sursă audio (selector CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Estompare în spatele textului (selector sau off) |
| `max-fps` | `30 (1-120)` | Limită de cadre pe secundă |
| `curves`, `hills` | `1 (0-2)` | Intensitatea curbelor și urcușurilor (0–2, implicit 1; 0 = drept și plat) |
| `course` | `1 (0.25-3)` | Cât de des apar (0,25–3, implicit 1) |
| `motion` | | `off` = imagine statică |

Funcționează în versiunile actuale de Chrome, Edge și Firefox cu WebGL. Fără WebGL primești un degrade calm; cu mișcare redusă, o imagine statică.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traduceri

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licență

Codul este sub licență MIT (vezi [LICENSE](../../LICENSE)). Fișierul muzical al demo-ului va avea propria licență: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

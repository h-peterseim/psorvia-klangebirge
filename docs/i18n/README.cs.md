# PSOrvia Klangebirge

**Zvukově reagující drátěné pohoří pro tvůj web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Živá ukázka s hudbou](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Klidná drátěná krajina jako pozadí stránky. Spektrum tvaruje hory: basy se stávají širokými masivy, výšky úzkými štíty. Letíš údolím. Reaguje na každé audio a video na stránce a za textem se ztlumí. Bez hudby krajina odpočívá, při omezeném pohybu zůstává statickým obrazem.

## Vložení

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atributy

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Barvy čar, tmavé téma |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Barvy čar, světlé téma |
| `opacity` | `1 (0-1)` | Průhlednost |
| `reactivity` | `1 (0-3)` | Síla reakce |
| `horizon` | `0.5 (0.2-0.9)` | Výška horizontu |
| `audio` | `audio, video` | Zdroj zvuku (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Ztlumení za textem (selektor nebo off) |
| `max-fps` | `30 (1-120)` | Limit snímků za sekundu |
| `curves`, `hills` | `1 (0-2)` | Síla zatáček a stoupání (0–2, výchozí 1; 0 = rovně a naplocho) |
| `course` | `1 (0.25-3)` | Jak často přicházejí (0,25–3, výchozí 1) |
| `motion` | | `off` = statický obraz |

Funguje v aktuálním Chrome, Edge a Firefox s WebGL. Bez WebGL dostaneš klidný přechod, při omezeném pohybu statický obraz.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Překlady

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licence

Kód je pod licencí MIT (viz [LICENSE](../../LICENSE)). Hudební soubor ukázky dostane vlastní licenci: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

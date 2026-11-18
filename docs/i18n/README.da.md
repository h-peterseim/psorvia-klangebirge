# PSOrvia Klangebirge

**Lydreaktivt trådbjergkæde til din hjemmeside**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo med musik](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Et roligt trådlandskab som sidebaggrund. Spektret former bjergene: bas bliver brede massiver, diskant smalle toppe. Du flyver gennem en dal. Det reagerer på al lyd og video på siden og toner ud bag din tekst. Uden musik hviler landskabet, ved reduceret bevægelse forbliver det et stillbillede.

## Indsættelse

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributter

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Linjefarver, mørkt tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Linjefarver, lyst tema |
| `opacity` | `1 (0-1)` | Dækevne |
| `reactivity` | `1 (0-3)` | Reaktionsstyrke |
| `horizon` | `0.5 (0.2-0.9)` | Horisonthøjde |
| `audio` | `audio, video` | Lydkilde (CSS-vælger) |
| `fade-text` | `h1, h2, h3, p, li` | Tone ud bag tekst (vælger eller off) |
| `max-fps` | `30 (1-120)` | Billedhastighedsgrænse |
| `curves`, `hills` | `1 (0-2)` | Styrke af sving og stigninger (0–2, standard 1; 0 = lige og vandret) |
| `course` | `1 (0.25-3)` | Hvor ofte de kommer (0,25–3, standard 1) |
| `motion` | | `off` = stillbillede |

Virker i nuværende Chrome, Edge og Firefox med WebGL. Uden WebGL får du en rolig overgang, ved reduceret bevægelse et stillbillede.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Oversættelser

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licens

Koden har MIT-licens (se [LICENSE](../../LICENSE)). Demoens musikfil får sin egen licens: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

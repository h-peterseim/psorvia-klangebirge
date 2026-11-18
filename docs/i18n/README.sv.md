# PSOrvia Klangebirge

**Ljudreaktiv trådbergskedja för din webbplats**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Livedemo med musik](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Ett lugnt trådlandskap som sidbakgrund. Spektrumet formar bergen: bas blir breda massiv, diskant smala toppar. Du flyger genom en dal. Det reagerar på allt ljud och video på sidan och tonas ut bakom din text. Utan musik vilar landskapet, vid reducerad rörelse blir det en stillbild.

## Inbyggnad

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attribut

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Linjefärger, mörkt tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Linjefärger, ljust tema |
| `opacity` | `1 (0-1)` | Opacitet |
| `reactivity` | `1 (0-3)` | Reaktionsstyrka |
| `horizon` | `0.5 (0.2-0.9)` | Horisonthöjd |
| `audio` | `audio, video` | Ljudkälla (CSS-väljare) |
| `fade-text` | `h1, h2, h3, p, li` | Tona ner bakom text (väljare eller off) |
| `max-fps` | `30 (1-120)` | Bildfrekvensgräns |
| `curves`, `hills` | `1 (0-2)` | Styrka på kurvor och stigningar (0–2, standard 1; 0 = rakt och plant) |
| `course` | `1 (0.25-3)` | Hur ofta de kommer (0,25–3, standard 1) |
| `motion` | | `off` = stillbild |

Fungerar i aktuella Chrome, Edge och Firefox med WebGL. Utan WebGL får du en lugn toning, vid reducerad rörelse en stillbild.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Översättningar

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licens

Koden har MIT-licens (se [LICENSE](../../LICENSE)). Demons musikfil får en egen licens: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

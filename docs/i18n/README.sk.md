# PSOrvia Klangebirge

**Zvukovo reagujúce drôtené pohorie pre tvoj web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Živá ukážka s hudbou](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Pokojná drôtená krajina ako pozadie stránky. Spektrum tvaruje hory: basy sa menia na široké masívy, výšky na úzke štíty. Letíš dolinou. Reaguje na každé audio a video na stránke a za textom sa stráca. Bez hudby krajina odpočíva, pri obmedzenom pohybe zostáva statickým obrazom.

## Vloženie

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atribúty

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Farby čiar, tmavá téma |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Farby čiar, svetlá téma |
| `opacity` | `1 (0-1)` | Priehľadnosť |
| `reactivity` | `1 (0-3)` | Sila reakcie |
| `horizon` | `0.5 (0.2-0.9)` | Výška horizontu |
| `audio` | `audio, video` | Zdroj zvuku (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Tlmenie za textom (selektor alebo off) |
| `max-fps` | `30 (1-120)` | Limit snímok za sekundu |
| `curves`, `hills` | `1 (0-2)` | Sila zákrut a stúpaní (0–2, predvolene 1; 0 = rovno a naplocho) |
| `course` | `1 (0.25-3)` | Ako často prichádzajú (0,25–3, predvolene 1) |
| `motion` | | `off` = statický obraz |

Funguje v aktuálnych prehliadačoch Chrome, Edge a Firefox s WebGL. Bez WebGL dostaneš pokojný prechod, pri obmedzenom pohybe statický obraz.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Preklady

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencia

Kód je pod licenciou MIT (pozri [LICENSE](../../LICENSE)). Hudobný súbor ukážky dostane vlastnú licenciu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

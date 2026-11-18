# PSOrvia Klangebirge

**Lydreaktivt trådnettfjellandskap for nettstedet ditt**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo med musikk](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Et rolig trådnettlandskap som sidebakgrunn (bare linjer, dybden tones ut mot horisonten). Spekteret former fjellene: bass blir brede massiver, diskant blir smale topper. Du flyr gjennom en dal; musikken løfter fjellene rundt deg mens de kommer mot deg. Det reagerer på all lyd og video på siden og tones ut bak teksten din. Uten musikk hviler landskapet helt (tegningen stopper); med redusert bevegelse forblir det et stillbilde.

## Bruk

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributter

| Attributt | Standard | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Linjefarger, mørkt tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Linjefarger, lyst tema |
| `opacity` | `1 (0-1)` | Dekkevne |
| `reactivity` | `1 (0-3)` | Reaksjonsstyrke |
| `horizon` | `0.5 (0.2-0.9)` | Horisonthøyde |
| `audio` | `audio, video` | Lydkilde (CSS-velger) |
| `fade-text` | `h1, h2, h3, p, li` | Tone ut bak tekst (velger eller av) |
| `max-fps` | `30 (1-120)` | Bildefrekvensgrense |
| `curves`, `hills` | `1 (0-2)` | Styrken på svingene og stigningene (0-2, standard 1; 0 = rett og flatt) |
| `course` | `1 (0.25-3)` | Hvor ofte de kommer (0,25-3, standard 1) |
| `motion` | | `off` = stillbilde |

Fungerer i gjeldende versjoner av Chrome, Edge og Firefox med WebGL. Uten WebGL får du en rolig gradient; med redusert bevegelse et stillbilde.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Oversettelser

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Norsk bokmål](docs/i18n/README.nb.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md) · [Türkçe](docs/i18n/README.tr.md)

## Lisens

Koden er lisensiert under MIT (se [LICENSE](LICENSE)). Demomusikken (`media/klangebirge-demo.mp3`) er lisensiert under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), navngivelse «Petit Souris / psorvia.io» (se [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

Laget for [psorvia.io](https://psorvia.io).

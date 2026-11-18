# PSOrvia Klangebirge

**Reagujące na dźwięk drucianne pasmo górskie dla Twojej strony**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo na żywo z muzyką](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Spokojny druciany krajobraz jako tło strony. Widmo kształtuje góry: basy stają się szerokimi masywami, wysokie tony wąskimi szczytami. Lecisz przez dolinę. Reaguje na każdy dźwięk i wideo na stronie i zanika za tekstem. Bez muzyki krajobraz odpoczywa, przy ograniczonym ruchu pozostaje nieruchomym obrazem.

## Użycie

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atrybuty

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Kolory linii, ciemny motyw |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Kolory linii, jasny motyw |
| `opacity` | `1 (0-1)` | Krycie |
| `reactivity` | `1 (0-3)` | Siła reakcji |
| `horizon` | `0.5 (0.2-0.9)` | Wysokość horyzontu |
| `audio` | `audio, video` | Źródło dźwięku (selektor CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Przygaszanie za tekstem (selektor lub off) |
| `max-fps` | `30 (1-120)` | Limit klatek na sekundę |
| `curves`, `hills` | `1 (0-2)` | Siła zakrętów i wzniesień (0–2, domyślnie 1; 0 = prosto i płasko) |
| `course` | `1 (0.25-3)` | Jak często się pojawiają (0,25–3, domyślnie 1) |
| `motion` | | `off` = nieruchomy obraz |

Działa w aktualnych przeglądarkach Chrome, Edge i Firefox z WebGL. Bez WebGL dostajesz spokojny gradient, przy ograniczonym ruchu obraz statyczny.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Tłumaczenia

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencja

Kod jest na licencji MIT (zob. [LICENSE](../../LICENSE)). Plik muzyczny dema otrzyma własną licencję: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

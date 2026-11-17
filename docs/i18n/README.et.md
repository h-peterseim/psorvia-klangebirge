# PSOrvia Klangebirge

**Heliga reageeriv traatmäestik sinu veebilehele**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Otsedemo muusikaga](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Rahulik traatmaastik lehe taustaks. Spekter vormib mäed: bassid muutuvad laiadeks massiivideks, kõrged helid kitsasteks tippudeks. Lendad läbi oru. See reageerib iga lehel olevale heli- ja videofailile ning hajub teksti taga. Ilma muusikata maastik puhkab, vähendatud liikumise korral jääb see paigalolevaks pildiks.

## Kasutamine

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atribuudid

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Joonte värvid, tume teema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Joonte värvid, hele teema |
| `opacity` | `1 (0-1)` | Läbipaistmatus |
| `reactivity` | `1 (0-3)` | Reaktsiooni tugevus |
| `horizon` | `0.5 (0.2-0.9)` | Horisondi kõrgus |
| `audio` | `audio, video` | Heliallikas (CSS-valija) |
| `fade-text` | `h1, h2, h3, p, li` | Hajumine teksti taga (valija või off) |
| `max-fps` | `30 (1-120)` | Kaadrisageduse piir |
| `curves`, `hills` | `1 (0-2)` | Kurvide ja tõusude tugevus (0–2, vaikimisi 1; 0 = sirge ja tasane) |
| `course` | `1 (0.25-3)` | Kui sageli need tulevad (0,25–3, vaikimisi 1) |
| `motion` | | `off` = paigalolev pilt |

Töötab praegustes Chrome'is, Edge'is ja Firefoxis koos WebGL-iga. Ilma WebGL-ita saad rahuliku üleminekuvärvi, vähendatud liikumisega staatilise pildi.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Tõlked

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md)

## Litsents

Kood on MIT-litsentsiga (vt [LICENSE](../../LICENSE)). Demo muusikafail saab oma litsentsi: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

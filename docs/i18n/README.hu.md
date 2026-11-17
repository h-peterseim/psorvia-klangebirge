# PSOrvia Klangebirge

**Hangra reagáló drótvázas hegylánc a weboldaladhoz**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Élő demó zenével](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Nyugodt drótvázas táj az oldal hátterében. A spektrum formálja a hegyeket: a mély hangokból széles tömbök, a magasakból keskeny csúcsok lesznek. Egy völgyön át repülsz. Minden hangra és videóra reagál az oldalon, és a szöveged mögött elhalványul. Zene nélkül a táj nyugszik, csökkentett mozgásnál állókép marad.

## Beépítés

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attribútumok

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Vonalszínek, sötét téma |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Vonalszínek, világos téma |
| `opacity` | `1 (0-1)` | Átlátszatlanság |
| `reactivity` | `1 (0-3)` | Reakció erőssége |
| `horizon` | `0.5 (0.2-0.9)` | Horizont magassága |
| `audio` | `audio, video` | Hangforrás (CSS-választó) |
| `fade-text` | `h1, h2, h3, p, li` | Elhalványítás a szöveg mögött (választó vagy off) |
| `max-fps` | `30 (1-120)` | Képkockasebesség-korlát |
| `curves`, `hills` | `1 (0-2)` | A kanyarok és emelkedők erőssége (0–2, alapértelmezett 1; 0 = egyenes és sík) |
| `course` | `1 (0.25-3)` | Milyen gyakran jönnek (0,25–3, alapértelmezett 1) |
| `motion` | | `off` = állókép |

Működik az aktuális Chrome, Edge és Firefox böngészőkben WebGL-lel. WebGL nélkül nyugodt színátmenetet kapsz, csökkentett mozgásnál állóképet.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Fordítások

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md)

## Licenc

A kód MIT-licencű (lásd [LICENSE](../../LICENSE)). A demó zenefájlja saját licencet kap: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

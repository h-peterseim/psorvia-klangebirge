# PSOrvia Klangebirge

**Sraith sléibhte sreinge a fhreagraíonn don fhuaim do do shuíomh gréasáin**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Taispeántas beo le ceol](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Tírdhreach socair sreinge mar chúlra leathanaigh. Múnlaíonn an speictream na sléibhte: éiríonn an dord ina mhórchnoic leathana, an tríbil ina mhullaí caola. Eitlíonn tú trí ghleann. Freagraíonn sé d'aon fhuaim nó físeán ar an leathanach agus laghdaíonn sé taobh thiar de do théacs. Gan ceol bíonn an tírdhreach ar scíth; le gluaiseacht laghdaithe fanann sé ina íomhá statach.

## Úsáid

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Tréithe

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Dathanna línte, téama dorcha |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Dathanna línte, téama geal |
| `opacity` | `1 (0-1)` | Teimhneacht |
| `reactivity` | `1 (0-3)` | Neart freagartha |
| `horizon` | `0.5 (0.2-0.9)` | Airde na spéire |
| `audio` | `audio, video` | Foinse fuaime (roghnóir CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Laghdú taobh thiar de théacs (roghnóir nó off) |
| `max-fps` | `30 (1-120)` | Teorainn fráma |
| `curves`, `hills` | `1 (0-2)` | Neart na gcasadh agus na n-ardú (0–2, réamhshocrú 1; 0 = díreach agus cothrom) |
| `course` | `1 (0.25-3)` | Cé chomh minic is a thagann siad (0.25–3, réamhshocrú 1) |
| `motion` | | `off` = íomhá statach |

Oibríonn sé i Chrome, Edge agus Firefox reatha le WebGL. Gan WebGL, gheobhaidh tú grádán ciúin; le gluaiseacht laghdaithe, íomhá statach.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Aistriúcháin

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md)

## Ceadúnas

Tá an cód faoi cheadúnas MIT (féach [LICENSE](../../LICENSE)). Beidh ceadúnas dá chuid féin ag comhad ceoil an taispeána: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

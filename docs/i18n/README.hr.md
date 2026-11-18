# PSOrvia Klangebirge

**Zvučno reaktivan žičani planinski lanac za tvoje web-mjesto**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo uživo s glazbom](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Miran žičani krajolik kao pozadina stranice. Spektar oblikuje planine: bas postaje široki masivi, visoki tonovi uski vrhovi. Letiš kroz dolinu. Reagira na svaki zvuk i video na stranici i blijedi iza tvog teksta. Bez glazbe krajolik miruje, uz smanjeno kretanje ostaje statična slika.

## Uključivanje

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atributi

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Boje linija, tamna tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Boje linija, svijetla tema |
| `opacity` | `1 (0-1)` | Neprozirnost |
| `reactivity` | `1 (0-3)` | Jačina reakcije |
| `horizon` | `0.5 (0.2-0.9)` | Visina horizonta |
| `audio` | `audio, video` | Izvor zvuka (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Stišavanje iza teksta (selektor ili off) |
| `max-fps` | `30 (1-120)` | Ograničenje broja sličica |
| `curves`, `hills` | `1 (0-2)` | Jačina zavoja i uspona (0–2, zadano 1; 0 = ravno i ravnomjerno) |
| `course` | `1 (0.25-3)` | Koliko često dolaze (0,25–3, zadano 1) |
| `motion` | | `off` = statična slika |

Radi u aktualnim preglednicima Chrome, Edge i Firefox s WebGL-om. Bez WebGL-a dobivaš miran prijelaz boja, uz smanjeno kretanje statičnu sliku.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Prijevodi

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenca

Kod je pod licencom MIT (vidi [LICENSE](../../LICENSE)). Glazbena datoteka demoa dobit će vlastitu licencu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

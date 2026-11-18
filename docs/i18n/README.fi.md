# PSOrvia Klangebirge

**Äänelle reagoiva rautalankavuoristo verkkosivullesi**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo musiikin kanssa](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Rauhallinen rautalankamaisema sivun taustana. Spektri muovaa vuoret: basso muuttuu leveiksi massiiveiksi, korkeat äänet kapeiksi huipuiksi. Lennät laakson halki. Se reagoi sivun jokaiseen ääneen ja videoon ja häipyy tekstisi takana. Ilman musiikkia maisema lepää, vähennetyllä liikkeellä se pysyy pysäytyskuvana.

## Käyttö

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attribuutit

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Viivojen värit, tumma teema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Viivojen värit, vaalea teema |
| `opacity` | `1 (0-1)` | Peittävyys |
| `reactivity` | `1 (0-3)` | Reaktion voimakkuus |
| `horizon` | `0.5 (0.2-0.9)` | Horisontin korkeus |
| `audio` | `audio, video` | Äänilähde (CSS-valitsin) |
| `fade-text` | `h1, h2, h3, p, li` | Vaimennus tekstin takana (valitsin tai off) |
| `max-fps` | `30 (1-120)` | Kuvataajuuden raja |
| `curves`, `hills` | `1 (0-2)` | Mutkien ja nousujen voimakkuus (0–2, oletus 1; 0 = suora ja tasainen) |
| `course` | `1 (0.25-3)` | Kuinka usein ne tulevat (0,25–3, oletus 1) |
| `motion` | | `off` = pysäytyskuva |

Toimii nykyisissä Chromessa, Edgessä ja Firefoxissa WebGL:n kanssa. Ilman WebGL:ää saat rauhallisen liukuvärin, vähennetyllä liikkeellä pysäytyskuvan.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Käännökset

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Lisenssi

Koodi on MIT-lisenssillä (ks. [LICENSE](../../LICENSE)). Demon musiikkitiedosto saa oman lisenssinsä: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

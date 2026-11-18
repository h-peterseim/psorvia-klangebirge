# PSOrvia Klangebirge

**Skaņai reaģējoša stiepļu kalnu grēda tavai tīmekļa vietnei**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Tiešraides demo ar mūziku](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Mierīga stiepļu ainava kā lapas fons. Spektrs veido kalnus: basi kļūst par platiem masīviem, augstie toņi par šaurām smailēm. Tu lido pa ieleju. Tā reaģē uz jebkuru skaņu un video lapā un izgaist aiz tava teksta. Bez mūzikas ainava atpūšas, ar samazinātu kustību paliek nekustīgs attēls.

## Iekļaušana

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atribūti

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Līniju krāsas, tumšā tēma |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Līniju krāsas, gaišā tēma |
| `opacity` | `1 (0-1)` | Necaurredzamība |
| `reactivity` | `1 (0-3)` | Reakcijas stiprums |
| `horizon` | `0.5 (0.2-0.9)` | Horizonta augstums |
| `audio` | `audio, video` | Skaņas avots (CSS selektors) |
| `fade-text` | `h1, h2, h3, p, li` | Izdzišana aiz teksta (selektors vai off) |
| `max-fps` | `30 (1-120)` | Kadru ātruma ierobežojums |
| `curves`, `hills` | `1 (0-2)` | Līkumu un kāpumu stiprums (0–2, noklusējums 1; 0 = taisni un līdzeni) |
| `course` | `1 (0.25-3)` | Cik bieži tie nāk (0,25–3, noklusējums 1) |
| `motion` | | `off` = nekustīgs attēls |

Darbojas pašreizējos Chrome, Edge un Firefox ar WebGL. Bez WebGL iegūsi mierīgu pāreju, ar samazinātu kustību nekustīgu attēlu.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Tulkojumi

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licence

Kods ir ar MIT licenci (skat. [LICENSE](../../LICENSE)). Demonstrācijas mūzikas failam būs sava licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

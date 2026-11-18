# PSOrvia Klangebirge

**Katina ta' muntanji bil-wajers li tirreaġixxi għall-awdjo għas-sit tiegħek**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo diretta bil-mużika](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Pajsaġġ kalm bil-linji bħala sfond tal-paġna. L-ispettru jifforma l-muntanji: il-bass isir massiċċi wesgħin, l-ogħla ħsejjes qċaċet dojoq. Tittajjar minn ġol-wied. Tirreaġixxi għal kull awdjo u vidjo fil-paġna u titnaqqas wara t-test tiegħek. Mingħajr mużika l-pajsaġġ jistrieħ; b'moviment imnaqqas jibqa' stampa fissa.

## Użu

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributi

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Kuluri tal-linji, tema skura |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Kuluri tal-linji, tema ċara |
| `opacity` | `1 (0-1)` | Opaċità |
| `reactivity` | `1 (0-3)` | Qawwa tar-reazzjoni |
| `horizon` | `0.5 (0.2-0.9)` | Għoli tal-orizzont |
| `audio` | `audio, video` | Sors tal-awdjo (selettur CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Tisfumatura wara t-test (selettur jew off) |
| `max-fps` | `30 (1-120)` | Limitu tal-frejms |
| `curves`, `hills` | `1 (0-2)` | Qawwa tal-kurvi u tal-għoljiet (0–2, awtomatiku 1; 0 = dritt u ċatt) |
| `course` | `1 (0.25-3)` | Kemm-il darba jiġu (0,25–3, awtomatiku 1) |
| `motion` | | `off` = stampa fissa |

Taħdem fl-aħħar verżjonijiet ta' Chrome, Edge u Firefox b'WebGL. Mingħajr WebGL tikseb gradjent kalm; b'moviment imnaqqas, stampa fissa.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traduzzjonijiet

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Liċenzja

Il-kodiċi huwa taħt il-liċenzja MIT (ara [LICENSE](../../LICENSE)). Il-fajl tal-mużika tad-demo se jkollu liċenzja tiegħu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

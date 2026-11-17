# PSOrvia Klangebirge

**Na zvok odzivno žično gorovje za tvojo spletno stran**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Predstavitev v živo z glasbo](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Mirna žična pokrajina kot ozadje strani. Spekter oblikuje gore: bas postane široke masive, visoki toni ozke vrhove. Leti skozi dolino. Odziva se na vsak zvok in video na strani in bledi za tvojim besedilom. Brez glasbe pokrajina počiva, ob zmanjšanem gibanju ostane mirujoča slika.

## Vključitev

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
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Barve črt, temna tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Barve črt, svetla tema |
| `opacity` | `1 (0-1)` | Prekrivnost |
| `reactivity` | `1 (0-3)` | Moč odziva |
| `horizon` | `0.5 (0.2-0.9)` | Višina obzorja |
| `audio` | `audio, video` | Vir zvoka (izbirnik CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Zatemnitev za besedilom (izbirnik ali off) |
| `max-fps` | `30 (1-120)` | Omejitev sličic na sekundo |
| `curves`, `hills` | `1 (0-2)` | Moč ovinkov in vzponov (0–2, privzeto 1; 0 = naravnost in ravno) |
| `course` | `1 (0.25-3)` | Kako pogosto pridejo (0,25–3, privzeto 1) |
| `motion` | | `off` = mirujoča slika |

Deluje v trenutnih brskalnikih Chrome, Edge in Firefox z WebGL. Brez WebGL dobiš miren prehod, pri zmanjšanem gibanju mirujočo sliko.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Prevodi

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md)

## Licenca

Koda ima licenco MIT (glej [LICENSE](../../LICENSE)). Glasbena datoteka predstavitve bo imela svojo licenco: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

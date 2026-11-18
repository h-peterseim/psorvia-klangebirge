# PSOrvia Klangebirge

**Garsui reaguojanti vielinė kalnų grandinė tavo svetainei**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Tiesioginė demonstracija su muzika](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Ramus vielinis kraštovaizdis puslapio fone. Spektras formuoja kalnus: bosai tampa plačiais masyvais, aukšti garsai – siaurais viršūnėmis. Skrendi per slėnį. Reaguoja į bet kokį puslapio garsą ar vaizdo įrašą ir išblėsta už tavo teksto. Be muzikos kraštovaizdis ilsisi, sumažinus judėjimą lieka nejudantis vaizdas.

## Įtraukimas

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atributai

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Linijų spalvos, tamsi tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Linijų spalvos, šviesi tema |
| `opacity` | `1 (0-1)` | Nepermatomumas |
| `reactivity` | `1 (0-3)` | Reakcijos stiprumas |
| `horizon` | `0.5 (0.2-0.9)` | Horizonto aukštis |
| `audio` | `audio, video` | Garso šaltinis (CSS parinkiklis) |
| `fade-text` | `h1, h2, h3, p, li` | Pritemimas už teksto (parinkiklis arba off) |
| `max-fps` | `30 (1-120)` | Kadrų dažnio riba |
| `curves`, `hills` | `1 (0-2)` | Posūkių ir kilimų stiprumas (0–2, numatyta 1; 0 = tiesiai ir lygiai) |
| `course` | `1 (0.25-3)` | Kaip dažnai jie ateina (0,25–3, numatyta 1) |
| `motion` | | `off` = nejudantis vaizdas |

Veikia dabartinėse Chrome, Edge ir Firefox su WebGL. Be WebGL gauni ramų gradientą, esant sumažintam judėjimui nejudantį vaizdą.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Vertimai

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencija

Kodas licencijuotas pagal MIT (žr. [LICENSE](../../LICENSE)). Demonstracijos muzikos failas turės savo licenciją: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

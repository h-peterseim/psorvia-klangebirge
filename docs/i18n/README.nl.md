# PSOrvia Klangebirge

**Audioreactief draadgebergte voor je website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live demo met muziek](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Een rustig draadlandschap als paginaachtergrond. Het spectrum vormt de bergen: bas wordt brede massieven, hoge tonen smalle toppen. Je vliegt door een dal. Het reageert op elke audio en video op de pagina en vervaagt achter je tekst. Zonder muziek rust het landschap, bij verminderde beweging blijft het een stilstaand beeld.

## Insluiten

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributen

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Lijnkleuren, donker thema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Lijnkleuren, licht thema |
| `opacity` | `1 (0-1)` | Dekking |
| `reactivity` | `1 (0-3)` | Reactiesterkte |
| `horizon` | `0.5 (0.2-0.9)` | Horizonhoogte |
| `audio` | `audio, video` | Audiobron (CSS-selector) |
| `fade-text` | `h1, h2, h3, p, li` | Vervagen achter tekst (selector of off) |
| `max-fps` | `30 (1-120)` | Framerate-limiet |
| `curves`, `hills` | `1 (0-2)` | Sterkte van bochten en stijgingen (0–2, standaard 1; 0 = recht en vlak) |
| `course` | `1 (0.25-3)` | Hoe vaak ze komen (0,25–3, standaard 1) |
| `motion` | | `off` = stilstaand beeld |

Werkt in actuele Chrome, Edge en Firefox met WebGL. Zonder WebGL krijg je een rustige kleurovergang, bij verminderde beweging een stilstaand beeld.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Vertalingen

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licentie

De code valt onder de MIT-licentie (zie [LICENSE](../../LICENSE)). Het muziekbestand van de demo krijgt een eigen licentie: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

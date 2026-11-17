# PSOrvia Klangebirge

**Audio-reactive wireframe mountain range for your website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live demo with music](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

A calm wireframe landscape as page background (lines only, depth fades toward the horizon). The spectrum shapes the mountains: bass becomes broad massifs, treble becomes narrow peaks. You fly through a valley; the music raises the mountains around you as they come towards you. It reacts to any audio or video on the page and fades out behind your text. Without music the landscape rests completely (drawing stops); with reduced motion it stays a still image.

## Usage

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributes

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Line colors, dark theme |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Line colors, light theme |
| `opacity` | `1 (0-1)` | Opacity |
| `reactivity` | `1 (0-3)` | Reaction strength |
| `horizon` | `0.5 (0.2-0.9)` | Horizon height |
| `audio` | `audio, video` | Audio source (CSS selector) |
| `fade-text` | `h1, h2, h3, p, li` | Fade behind text (selector or off) |
| `max-fps` | `30 (1-120)` | Frame rate limit |
| `curves`, `hills` | `1 (0-2)` | Strength of the bends and climbs (0-2, default 1; 0 = straight and level) |
| `course` | `1 (0.25-3)` | How often they come (0.25-3, default 1) |
| `motion` | | `off` = still image |

Works in current Chrome, Edge and Firefox with WebGL. Without WebGL you get a calm gradient; with reduced motion a still image.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Translations

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md)

## License

The code is MIT licensed (see [LICENSE](LICENSE)). The demo music (`media/klangebirge-demo.mp3`) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), attribution "Petit Souris / psorvia.io" (see [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

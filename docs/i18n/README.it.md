# PSOrvia Klangebirge

**Catena montuosa a linee reattiva all'audio per il tuo sito**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo dal vivo con musica](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Un tranquillo paesaggio a linee come sfondo della pagina. Lo spettro modella le montagne: i bassi diventano ampi massicci, gli alti cime strette. Voli attraverso una valle. Reagisce a qualsiasi audio o video della pagina e sfuma dietro il tuo testo. Senza musica il paesaggio riposa; con movimento ridotto resta un'immagine fissa.

## Utilizzo

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
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Colori delle linee, tema scuro |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Colori delle linee, tema chiaro |
| `opacity` | `1 (0-1)` | Opacità |
| `reactivity` | `1 (0-3)` | Intensità di reazione |
| `horizon` | `0.5 (0.2-0.9)` | Altezza dell'orizzonte |
| `audio` | `audio, video` | Sorgente audio (selettore CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Attenuazione dietro il testo (selettore oppure off) |
| `max-fps` | `30 (1-120)` | Limite di fotogrammi |
| `curves`, `hills` | `1 (0-2)` | Intensità di curve e salite (0–2, predefinito 1; 0 = dritto e piano) |
| `course` | `1 (0.25-3)` | Con quale frequenza arrivano (0,25–3, predefinito 1) |
| `motion` | | `off` = immagine fissa |

Funziona nelle versioni attuali di Chrome, Edge e Firefox con WebGL. Senza WebGL ottieni una sfumatura tranquilla; con movimento ridotto, un'immagine fissa.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traduzioni

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenza

Il codice è sotto licenza MIT (vedi [LICENSE](../../LICENSE)). Il file musicale della demo avrà una propria licenza: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

# PSOrvia Klangebirge

**Audioreaktives Gitter-Gebirge für deine Website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-Demo mit Musik](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Eine ruhige Drahtgitter-Landschaft als Seitenhintergrund. Das Spektrum formt die Berge: Bässe werden breite Massive, Höhen schmale Gipfel. Du fliegst durch ein Tal. Sie reagiert auf jedes Audio und Video der Seite und blendet sich hinter deinem Text aus. Ohne Musik ruht die Landschaft, bei reduzierter Bewegung bleibt sie ein Standbild.

## Einbindung

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attribute

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Linienfarben, dunkles Thema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Linienfarben, helles Thema |
| `opacity` | `1 (0-1)` | Deckkraft |
| `reactivity` | `1 (0-3)` | Reaktionsstärke |
| `horizon` | `0.5 (0.2-0.9)` | Horizonthöhe |
| `audio` | `audio, video` | Audioquelle (CSS-Selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Abschwächen hinter Text (Selektor oder off) |
| `max-fps` | `30 (1-120)` | Bildraten-Grenze |
| `curves`, `hills` | `1 (0-2)` | Stärke der Kurven und Anstiege (0–2, Standard 1; 0 = gerade und eben) |
| `course` | `1 (0.25-3)` | Wie oft sie kommen (0,25–3, Standard 1) |
| `motion` | | `off` = Standbild |

Läuft in aktuellem Chrome, Edge und Firefox mit WebGL. Ohne WebGL gibt es einen ruhigen Verlauf, bei reduzierter Bewegung ein Standbild.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Übersetzungen

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Lizenz

Der Code steht unter der MIT-Lizenz (siehe [LICENSE](../../LICENSE)). Die Demo-Musik (`media/klangebirge-demo.mp3`) steht unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Namensnennung „Petit Souris / psorvia.io“ (siehe [media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

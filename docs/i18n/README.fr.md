# PSOrvia Klangebirge

**Chaîne de montagnes filaire réactive à l'audio pour ton site**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Démo en direct avec musique](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Un paysage filaire apaisant en arrière-plan de la page. Le spectre façonne les montagnes : les graves deviennent de larges massifs, les aigus des pics étroits. Tu voles à travers une vallée. Il réagit à tout audio ou vidéo de la page et s'estompe derrière ton texte. Sans musique le paysage repose ; avec mouvement réduit, il reste une image fixe.

## Intégration

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Attributs

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Couleurs des lignes, thème sombre |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Couleurs des lignes, thème clair |
| `opacity` | `1 (0-1)` | Opacité |
| `reactivity` | `1 (0-3)` | Intensité de réaction |
| `horizon` | `0.5 (0.2-0.9)` | Hauteur de l'horizon |
| `audio` | `audio, video` | Source audio (sélecteur CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Atténuation derrière le texte (sélecteur ou off) |
| `max-fps` | `30 (1-120)` | Limite d'images par seconde |
| `curves`, `hills` | `1 (0-2)` | Intensité des virages et des montées (0–2, défaut 1 ; 0 = droit et plat) |
| `course` | `1 (0.25-3)` | Fréquence d'apparition (0,25–3, défaut 1) |
| `motion` | | `off` = image fixe |

Fonctionne dans les versions actuelles de Chrome, Edge et Firefox avec WebGL. Sans WebGL, tu obtiens un dégradé calme ; avec mouvement réduit, une image fixe.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traductions

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md)

## Licence

Le code est sous licence MIT (voir [LICENSE](../../LICENSE)). Le fichier musical de la démo aura sa propre licence : [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

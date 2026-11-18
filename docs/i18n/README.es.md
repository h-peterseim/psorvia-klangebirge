# PSOrvia Klangebirge

**Cordillera de líneas reactiva al audio para tu sitio web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo en vivo con música](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Un paisaje tranquilo de líneas como fondo de la página. El espectro modela las montañas: los graves se vuelven macizos anchos, los agudos picos estrechos. Vuelas por un valle. Reacciona a cualquier audio o vídeo de la página y se desvanece detrás de tu texto. Sin música el paisaje descansa; con movimiento reducido queda como imagen fija.

## Uso

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Atributos

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Colores de línea, tema oscuro |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Colores de línea, tema claro |
| `opacity` | `1 (0-1)` | Opacidad |
| `reactivity` | `1 (0-3)` | Intensidad de reacción |
| `horizon` | `0.5 (0.2-0.9)` | Altura del horizonte |
| `audio` | `audio, video` | Fuente de audio (selector CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Atenuar tras el texto (selector u off) |
| `max-fps` | `30 (1-120)` | Límite de fotogramas |
| `curves`, `hills` | `1 (0-2)` | Intensidad de curvas y subidas (0–2, por defecto 1; 0 = recto y llano) |
| `course` | `1 (0.25-3)` | Con qué frecuencia aparecen (0,25–3, por defecto 1) |
| `motion` | | `off` = imagen fija |

Funciona en las versiones actuales de Chrome, Edge y Firefox con WebGL. Sin WebGL verás un degradado suave; con movimiento reducido, una imagen fija.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traducciones

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencia

El código tiene licencia MIT (véase [LICENSE](../../LICENSE)). El archivo de música de la demostración tendrá su propia licencia: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

# PSOrvia Klangebirge

**Аудио-реактивна жична планинска верига за твоя уебсайт**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Демо на живо с музика](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Спокоен жичен пейзаж като фон на страницата. Спектърът оформя планините: басът става широки масиви, високите тонове – тесни върхове. Прелиташ през долина. Реагира на всяко аудио и видео на страницата и избледнява зад текста. Без музика пейзажът почива, при намалено движение остава неподвижна картина.

## Включване

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Атрибути

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Цветове на линиите, тъмна тема |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Цветове на линиите, светла тема |
| `opacity` | `1 (0-1)` | Непрозрачност |
| `reactivity` | `1 (0-3)` | Сила на реакцията |
| `horizon` | `0.5 (0.2-0.9)` | Височина на хоризонта |
| `audio` | `audio, video` | Аудиоизточник (CSS селектор) |
| `fade-text` | `h1, h2, h3, p, li` | Избледняване зад текста (селектор или off) |
| `max-fps` | `30 (1-120)` | Ограничение на кадрите |
| `curves`, `hills` | `1 (0-2)` | Сила на завоите и изкачванията (0–2, по подразбиране 1; 0 = право и равно) |
| `course` | `1 (0.25-3)` | Колко често идват (0,25–3, по подразбиране 1) |
| `motion` | | `off` = неподвижна картина |

Работи в актуални Chrome, Edge и Firefox с WebGL. Без WebGL получаваш спокоен градиент, при намалено движение - неподвижна картина.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Преводи

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Лиценз

Кодът е с лиценз MIT (вж. [LICENSE](../../LICENSE)). Музикалният файл на демото ще има собствен лиценз: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

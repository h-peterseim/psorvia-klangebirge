# PSOrvia Klangebirge

**Cordilheira de linhas reativa ao áudio para o teu site**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demonstração ao vivo com música](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Uma paisagem tranquila de linhas como fundo da página. O espetro molda as montanhas: os graves tornam-se maciços largos, os agudos picos estreitos. Voas por um vale. Reage a qualquer áudio ou vídeo da página e esbate-se por trás do teu texto. Sem música a paisagem descansa; com movimento reduzido fica uma imagem fixa.

## Utilização

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
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Cores das linhas, tema escuro |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Cores das linhas, tema claro |
| `opacity` | `1 (0-1)` | Opacidade |
| `reactivity` | `1 (0-3)` | Intensidade da reação |
| `horizon` | `0.5 (0.2-0.9)` | Altura do horizonte |
| `audio` | `audio, video` | Fonte de áudio (seletor CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Esbater atrás do texto (seletor ou off) |
| `max-fps` | `30 (1-120)` | Limite de imagens por segundo |
| `curves`, `hills` | `1 (0-2)` | Intensidade das curvas e subidas (0–2, padrão 1; 0 = reto e plano) |
| `course` | `1 (0.25-3)` | Com que frequência aparecem (0,25–3, padrão 1) |
| `motion` | | `off` = imagem fixa |

Funciona nas versões atuais de Chrome, Edge e Firefox com WebGL. Sem WebGL, recebes um gradiente calmo; com movimento reduzido, uma imagem fixa.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Traduções

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licença

O código tem licença MIT (ver [LICENSE](../../LICENSE)). O ficheiro de música da demonstração terá a sua própria licença: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

# PSOrvia Klangebirge

**Web siteniz için sese tepki veren tel kafes dağ silsilesi**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Müzikli canlı demo](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Sayfa arka planı olarak sakin bir tel kafes manzara (yalnızca çizgiler, derinlik ufka doğru solar). Spektrum dağları şekillendirir: bas geniş kütlelere, tiz dar zirvelere dönüşür. Bir vadide uçarsınız; müzik, üzerinize gelen dağları çevrenizde yükseltir. Sayfadaki tüm ses ve videolara tepki verir ve metninizin arkasında kaybolur. Müzik olmadığında manzara tamamen durur (çizim durur); hareket azaltıldığında sabit bir görüntü olarak kalır.

## Kullanım

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Öznitelikler

| Öznitelik | Varsayılan | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Çizgi renkleri, koyu tema |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Çizgi renkleri, açık tema |
| `opacity` | `1 (0-1)` | Opaklık |
| `reactivity` | `1 (0-3)` | Tepki gücü |
| `horizon` | `0.5 (0.2-0.9)` | Ufuk yüksekliği |
| `audio` | `audio, video` | Ses kaynağı (CSS seçici) |
| `fade-text` | `h1, h2, h3, p, li` | Metnin arkasında solma (seçici veya kapalı) |
| `max-fps` | `30 (1-120)` | Kare hızı sınırı |
| `curves`, `hills` | `1 (0-2)` | Virajların ve yokuşların şiddeti (0-2, varsayılan 1; 0 = düz ve yatay) |
| `course` | `1 (0.25-3)` | Ne sıklıkla geldikleri (0,25-3, varsayılan 1) |
| `motion` | | `off` = sabit görüntü |

WebGL destekli güncel Chrome, Edge ve Firefox sürümlerinde çalışır. WebGL olmadan sakin bir renk geçişi, azaltılmış harekette ise sabit bir görüntü elde edersiniz.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Çeviriler

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Norsk bokmål](docs/i18n/README.nb.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md) · [Türkçe](docs/i18n/README.tr.md)

## Lisans

Kod MIT lisansı altındadır (bkz. [LICENSE](LICENSE)). Demo müziği (`media/klangebirge-demo.mp3`) [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) lisansı altındadır, atıf: "Petit Souris / psorvia.io" (bkz. [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

[psorvia.io](https://psorvia.io) için geliştirildi.

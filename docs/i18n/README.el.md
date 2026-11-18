# PSOrvia Klangebirge

**Ηχοαντιδραστική συρματοπλεγμένη οροσειρά για τον ιστότοπό σου**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Ζωντανή επίδειξη με μουσική](https://h-peterseim.github.io/psorvia-klangebirge/demo.html)

Ένα ήρεμο τοπίο από γραμμές ως φόντο της σελίδας. Το φάσμα διαμορφώνει τα βουνά: τα μπάσα γίνονται πλατιά massif, οι πρίμα στενές κορυφές. Πετάς μέσα από μια κοιλάδα. Αντιδρά σε κάθε ήχο και βίντεο της σελίδας και εξασθενεί πίσω από το κείμενό σου. Χωρίς μουσική το τοπίο ηρεμεί, με μειωμένη κίνηση μένει στατική εικόνα.

## Ενσωμάτωση

```html
<script src="klangebirge.js"></script>
<klang-gebirge></klang-gebirge>
```

```html
<script type="module" src="klangebirge.esm.js"></script>
```

## Χαρακτηριστικά

| Attribute | Default | |
|---|---|---|
| `color-a, color-b, color-c` | `#3b5878, #f0cfa0, #5f86a6` | Χρώματα γραμμών, σκούρο θέμα |
| `color-a-light, color-b-light, color-c-light` | `#587a96, #f4dcb8, #dbe7ef` | Χρώματα γραμμών, φωτεινό θέμα |
| `opacity` | `1 (0-1)` | Αδιαφάνεια |
| `reactivity` | `1 (0-3)` | Ένταση αντίδρασης |
| `horizon` | `0.5 (0.2-0.9)` | Ύψος ορίζοντα |
| `audio` | `audio, video` | Πηγή ήχου (επιλογέας CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Εξασθένηση πίσω από κείμενο (επιλογέας ή off) |
| `max-fps` | `30 (1-120)` | Όριο καρέ ανά δευτερόλεπτο |
| `curves`, `hills` | `1 (0-2)` | Ένταση των στροφών και των ανηφόρων (0–2, προεπιλογή 1· 0 = ευθεία και επίπεδη) |
| `course` | `1 (0.25-3)` | Πόσο συχνά εμφανίζονται (0,25–3, προεπιλογή 1) |
| `motion` | | `off` = στατική εικόνα |

Λειτουργεί σε τρέχοντα Chrome, Edge και Firefox με WebGL. Χωρίς WebGL παίρνεις ήρεμη διαβάθμιση, με μειωμένη κίνηση στατική εικόνα.

JavaScript: `useAnalyser(analyserNode)`, `simulate(true)`.

## Μεταφράσεις

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Άδεια

Ο κώδικας διατίθεται με άδεια MIT (βλ. [LICENSE](../../LICENSE)). Το μουσικό αρχείο της επίδειξης θα έχει δική του άδεια: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).

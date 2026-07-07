# 🅿️ Off-street parking opportunities — Schaerbeek 1030

> Inventory and cartography of off-street parking opportunities (public and accessible private parkings) for the municipality of Schaerbeek (1030) · Survey conducted March–June 2021

---

## 🔗 Quick Access

| Tool | Description | Link |
|---|---|---|
| 🌐 **Landing page** | Bilingual entry point (FR / NL) | [[index.html](https://gis1030.github.io/DSD-OffstreetParking1030/)] |
| 🗺️ **Carte / Kaart** | Interactive map — French version | [[indexFR.html](https://gis1030.github.io/DSD-OffstreetParking1030/indexFR.html)] |
| 🗺️ **Kaart / Carte** | Interactive map — Dutch version | [[indexNL.html]](https://gis1030.github.io/DSD-OffstreetParking1030/indexNL.html)] |

---

## 📋 About the Project

This project provides a spatial inventory of **off-street parking opportunities in the municipality of Schaerbeek**, covering **475 sites** identified between March and June 2021.

The survey was carried out by [BRAT](http://www.bratprojects.be/) on behalf of the municipality, based on the consultation of multiple databases (PE/IBGE, PACS, taxes, Ortho, BePark, and other sources). Data is processed to produce an interactive cartography accessible from any browser, with no installation required, available in **French** and **Dutch**.

---

## 🧭 Contents

### 🗺️ Interactive Map

The map plots each identified parking site as a point, styled according to a switchable display mode, over the Schaerbeek administrative context.

**Available display modes** (mutually exclusive, radio-style)

- 🎨 **Type de parking** — open-air, covered underground, covered above-ground, boxes (in-block or street-front), mixed configurations
- 🤝 **Mutualisation** — mutualised, refused by BePark, not mutualised
- 🏢 **Type de propriétaire** — public / private
- ⭐ **Sites retenus** — site selected as a candidate for future development (Potentiel)

**Additional layers**

- 🏘️ **Quartiers Schaerbeek** — administrative district boundaries
- 🔲 **Limites Schaerbeek** — municipal boundary

**Available filters and controls**

- **Quartier** — spatial (point-in-polygon) filter restricting visible sites to a single administrative district
- **Réinitialiser** — reset button, clears the quartier filter and re-centers the map
- **Recherche d'adresse** — address search bar (Nominatim / OpenStreetMap)
- **Langue** — quick switch between the French and Dutch map versions

**Key indicators**

- 📍 **475 sites** surveyed across the municipality
- 🅿️ **≈ 21,100 parking places** identified in total (sum of `NB_TOTAL`)
- 🏠 **418 private sites** vs. **57 public sites**
- 🔀 **42 sites** with a mutualised share (`dont_mutua > 0`)
- 🚫 **15 sites** refused by BePark
- ⭐ **23 sites** flagged as retained / candidate for potential development (`Potentiel = OUI`)

**Base maps** — Google Terrain (default) · Google Satellite · OpenStreetMap

Each site can be clicked to open a detail panel with generalities (address, total places, parking type), functions served (residential, offices, retail, industry, education, culture/sport, hotel, senior housing, public parking), additional info (BePark refusal, ownership, occupancy rate, RRU zone, COBRACE), data sources, comments, and linked PDF documents where available.

---

## 🛠️ Technologies

- **HTML / CSS / JavaScript** — 100% client-side application, no server required
- **Leaflet.js** — interactive mapping with per-mode GeoJSON layers
- **L.Control.Layers.Tree** — hierarchical layer control with radio groups (display modes / base maps)
- **L.Control.Locate** — user geolocation control
- **Leaflet Photon / Nominatim** — address search bar integrated in the map
- **FontAwesome** — icon set (subset embedded under `webfonts/`)
- **GitHub Pages** — static hosting

---

## 🌐 Compatibility

Compatible with recent versions of **Firefox**, **Chrome**, and **Edge**.
Optimised for desktop use; the map is responsive but best viewed on a wide screen.

---

## 📁 Repository Structure

```
offstreet_1030_be/
├── index.html                            # Bilingual landing page (FR / NL)
├── indexFR.html                          # Interactive map — French
├── indexNL.html                          # Interactive map — Dutch
├── css/                                  # Stylesheets (Leaflet, layer tree, locate, photon, FontAwesome)
│   └── images/                           # Icons, logos, control graphics
├── data/                                 # GeoJSON data (JS wrapper format)
│   ├── parking-data.js                   # 475 off-street parking sites (main dataset)
│   ├── QuartiersSchaerbeek_1.js          # Administrative districts
│   ├── LimitesSchaerbeek_2.js            # Municipal boundary
│   └── geojson/                          # Raw GeoJSON exports (source data)
├── js/                                   # Leaflet libraries + application logic
│   ├── map.js                            # Main map logic (styling, legend, filters, info panel)
│   ├── leaflet.js                        # Leaflet core
│   ├── L.Control.Layers.Tree.min.js      # Hierarchical layer control
│   ├── L.Control.Locate.min.js           # Geolocation control
│   └── leaflet.photon.js                 # Address search control
├── webfonts/                              # FontAwesome subset
└── images/                                # Reserved for additional media
```

---

## 📅 Changelog

| Date | Description |
|---|---|
| 2026 | Map re-implemented with a custom layer-tree control, quartier filter, and bilingual (FR/NL) interface |
| June 2021 | Initial cartography published |
| March–June 2021 | Off-street parking survey conducted by BRAT across the municipality (475 sites) |

---

## 📄 Data Sources

| Dataset | Source | Date |
|---|---|---|
| Off-street parking sites | Municipal survey — consultation of PE/IBGE, PACS, taxes, Ortho, BePark and other sources, carried out by BRAT | March–June 2021 |
| Administrative boundaries | Quartiers and limits of Schaerbeek | Reference |

Data is processed and packaged as static GeoJSON files for client-side rendering. No server-side queries are performed at runtime, except for the optional address search (Nominatim / OpenStreetMap).

---

## 🔒 Data Protection (GDPR)

### Nature of Published Data

Site records contain address-level data linked to specific (mostly private) parking facilities. No direct personal identifiers (names, contact details) are published in this application.

| Data | Nature | Justification |
|---|---|---|
| Site ID | Technical identifier | Anonymous reference |
| Street address | Geographical | Spatial mapping of the site |
| Parking type / capacity | Typological, quantitative | Statistical and planning analysis |
| Type de propriétaire | Typological | Public / private classification |
| Functions served (residential, offices, retail, …) | Typological | Contextual use of the site |
| Quartier | Geographical | Administrative aggregation |

No personal data related to individual users, tenants, or occupants of the parking sites is published; the dataset describes facilities, not individuals.

### Legal Basis

The publication of this data is grounded in:
- **Article 6.1(e) of the GDPR** — processing necessary for the performance of a task carried out in the public interest
- **Principle of administrative transparency** applicable to Belgian public administrations

> ⚠️ *Full compliance of this processing activity, in particular regarding the terms of public access to address-level site data on private properties, should be reviewed with the Data Protection Officer (DPO) of the municipality of Schaerbeek prior to any public deployment.*

### Data Controller

**Commune de Schaerbeek** · Place Colignon · 1030 Brussels · Belgium

---

## 📄 Licence

This project is licensed under the **European Union Public Licence v. 1.2 (EUPL-1.2)**.
See the [LICENSE](LICENSE) file for the full text.

[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL%201.2-blue.svg)](https://eupl.eu/1.2/en/)

> © 2021–2026 Direction des Systèmes d'Information (DSI) · Commune de Schaerbeek · 1030 Brussels · Belgium

---

*Commune de Schaerbeek · Direction des Systèmes d'Information (DSI) · 1030 Brussels · Belgium*

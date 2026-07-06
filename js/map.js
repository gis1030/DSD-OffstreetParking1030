(function () {
    'use strict';

    /* =========================================================
       CONFIGURATION
       ========================================================= */

    var lang = window.appLanguage || 'fr';

    var COLORS = {
        type: {
            ouvert: '#2ba6ff',
            couvert_sous_sol: '#335496',
            couvert_hors_sol: '#42dd73',
            boxes_ilot: '#ce3943',
            boxes_front_rue: '#df37c3',
            mix: '#ff9c3a',
            _default: '#595959'
        },
        mutu: {
            mutu: '#c8e6cf',
            refused: '#ce3943',
            none: '#335496',
            _default: '#595959'
        },
        owner: {
            'public': '#2ba6ff',
            'privé': '#ce3943',
            _default: '#595959'
        },
        highlighted: {
            'OUI': '#2ba6ff',
            'NON': '#595959',
            _default: '#595959'
        }
    };

    var LEGEND_CATS = {
        type: ['ouvert', 'couvert_sous_sol', 'couvert_hors_sol', 'boxes_ilot', 'boxes_front_rue', 'mix'],
        mutu: ['mutu', 'refused', 'none'],
        owner: ['public', 'privé'],
        highlighted: ['OUI', 'NON']
    };

    var TRANSLATIONS = {
        fr: {
            tree: {
                appTitle: 'Opportunités de stationnement hors voirie',
                appSubtitle: 'Commune de Schaerbeek',
                langHref: './indexNL.html',
                langLabel: 'carte NL',
                vue: '<b>Vue :</b>',
                schaerbeek: '<b>Schaerbeek</b>',
                limites: 'Limites Schaerbeek',
                quartiers: 'Quartiers Schaerbeek',
                allQuartiers: '— tous les quartiers —',
                reinitialiser: 'Réinitialiser',
                terrain: 'Google Terrain',
                satellite: 'Google Satellite',
                osm: 'OpenStreetMap'
            },
            legends: {
                type: 'Type de parking',
                mutu: 'Mutualisation',
                owner: 'Type de propriétaire',
                highlighted: 'Sites retenus'
            },
            categories: {
                ouvert: 'Ouvert',
                couvert_sous_sol: 'Couvert, en sous sol',
                couvert_hors_sol: 'Couvert, hors sol',
                boxes_ilot: 'Boxes en ilot',
                boxes_front_rue: 'Boxes côté rue',
                mix: 'Mix',
                mutu: 'Mutualisé',
                refused: 'Refus BePark',
                none: 'Non mutualisé',
                'public': 'Public',
                'privé': 'Privé',
                'OUI': 'Site retenu',
                'NON': 'Non retenu'
            },
            sizes: {
                le10: '≤ 10 places',
                le50: '≤ 50 places',
                le100: '≤ 100 places',
                le500: '≤ 500 places',
                ge500: '≥ 500 places',
                unknown: 'Potentialité de parking à confirmer'
            },
            sections: {
                generalities: 'Généralités',
                functions: 'Fonctions',
                more_info: "Plus d'infos",
                sources: 'Sources',
                comment: 'Commentaire',
                pdf: 'Documents PDF'
            },
            fields: {
                id: 'ID',
                ADRESSE: 'Adresse',
                NB_TOTAL: 'Nb. places total',
                dont_mutua: 'Dont mutualisés',
                Type_parki: 'Type de parking',
                Résidenti: 'Résidentiel',
                Bureaux: 'Bureaux',
                Commerces: 'Commerces',
                Industries: 'Industries',
                Enseigneme: 'Enseignement',
                Cultu_spor: 'Culture / Sport',
                hotel: 'Hôtel',
                seniorie: 'Séniorerie',
                Autre_equi: 'Autre équipement',
                Pk_public: 'Parking public',
                refusBePar: 'Refus BePark',
                Type_propr: 'Type de propriétaire',
                Tx_remplis: 'Taux de remplissage',
                Zone_RRU: 'Zone RRU',
                Nb_COBRACE: 'COBRACE',
                s_PE_IBGE: 'PE IBGE',
                s_PACS: 'PACS',
                s_taxes: 'Taxes',
                s_ortho: 'Ortho',
                s_BePark: 'BePark',
                s_autre: 'Autre source',
                Remarque: 'Remarque',
                '30_PDF': 'PDF 30 places',
                '10_PDF': 'PDF 10 places'
            },
            helptext: 'Pour accéder aux données, veuillez sélectionner un point sur la carte'
        },
        nl: {
            tree: {
                appTitle: 'Mogelijkheden voor parkeergelegenheid',
                appSubtitle: 'Gemeente Schaerbeek',
                langHref: './indexFR.html',
                langLabel: 'carte FR',
                vue: '<b>Weergave :</b>',
                schaerbeek: '<b>Schaarbeek</b>',
                limites: 'Grenzen Schaarbeek',
                quartiers: 'Wijken Schaarbeek',
                allQuartiers: '— alle wijken —',
                reinitialiser: 'Opnieuw instellen',
                terrain: 'Google Terrain',
                satellite: 'Google Satellite',
                osm: 'OpenStreetMap'
            },
            legends: {
                type: 'Type parking',
                mutu: 'Mutualisering',
                owner: 'Type eigenaar',
                highlighted: 'Weerhouden sites'
            },
            categories: {
                ouvert: 'Open',
                couvert_sous_sol: 'Overdekt, ondergronds',
                couvert_hors_sol: 'Overdekt, bovengronds',
                boxes_ilot: 'Boxen op eiland',
                boxes_front_rue: 'Boxen langs straat',
                mix: 'Mix',
                mutu: 'Gemutualiseerd',
                refused: 'Weigering BePark',
                none: 'Niet gemutualiseerd',
                'public': 'Publiek',
                'privé': 'Privé',
                'OUI': 'Weerhouden site',
                'NON': 'Niet weerhouden'
            },
            sizes: {
                le10: '≤ 10 plaatsen',
                le50: '≤ 50 plaatsen',
                le100: '≤ 100 plaatsen',
                le500: '≤ 500 plaatsen',
                ge500: '≥ 500 plaatsen',
                unknown: 'Potentieel parking te bevestigen'
            },
            sections: {
                generalities: 'Algemeen',
                functions: 'Functies',
                more_info: 'Meer info',
                sources: 'Bronnen',
                comment: 'Opmerking',
                pdf: 'PDF documenten'
            },
            fields: {
                id: 'ID',
                ADRESSE: 'Adres',
                NB_TOTAL: 'Totaal plaatsen',
                dont_mutua: 'Waarvan gemutualiseerd',
                Type_parki: 'Type parking',
                Résidenti: 'Residentieel',
                Bureaux: 'Kantoren',
                Commerces: 'Handel',
                Industries: 'Industrie',
                Enseigneme: 'Onderwijs',
                Cultu_spor: 'Cultuur / Sport',
                hotel: 'Hotel',
                seniorie: 'Seniorenwoning',
                Autre_equi: 'Andere uitrusting',
                Pk_public: 'Openbaar parking',
                refusBePar: 'Weigering BePark',
                Type_propr: 'Type eigenaar',
                Tx_remplis: 'Bezettingsgraad',
                Zone_RRU: 'Zone RRU',
                Nb_COBRACE: 'COBRACE',
                s_PE_IBGE: 'PE IBGE',
                s_PACS: 'PACS',
                s_taxes: 'Belastingen',
                s_ortho: 'Ortho',
                s_BePark: 'BePark',
                s_autre: 'Andere bron',
                Remarque: 'Opmerking',
                '30_PDF': 'PDF 30 plaatsen',
                '10_PDF': 'PDF 10 plaatsen'
            },
            helptext: 'Selecteer een punt op de kaart om de gegevens te raadplegen'
        }
    };

    var T = TRANSLATIONS[lang] || TRANSLATIONS.fr;

    var INFO_SECTIONS = [
        { key: 'generalities', fields: ['id', 'ADRESSE', 'NB_TOTAL', 'dont_mutua', 'Type_parki'] },
        { key: 'functions', fields: ['Résidenti', 'Bureaux', 'Commerces', 'Industries', 'Enseigneme', 'Cultu_spor', 'hotel', 'seniorie', 'Autre_equi', 'Pk_public'] },
        { key: 'more_info', fields: ['refusBePar', 'Type_propr', 'Tx_remplis', 'Zone_RRU', 'Nb_COBRACE'] },
        { key: 'sources', fields: ['s_PE_IBGE', 's_PACS', 's_taxes', 's_ortho', 's_BePark', 's_autre'] },
        { key: 'comment', fields: ['Remarque'] },
        { key: 'pdf', fields: ['30_PDF', '10_PDF'] }
    ];

    var MODES = ['type', 'mutu', 'owner', 'highlighted'];

    /* =========================================================
       STYLING
       ========================================================= */

    function getRadius(nb) {
        if (nb === null || nb === undefined) return 6;
        if (nb <= 10) return 3;
        if (nb <= 50) return 7;
        if (nb <= 100) return 9;
        if (nb <= 500) return 13;
        return 15;
    }

    function getMutuKey(p) {
        if (p.dont_mutua && p.dont_mutua > 0) return 'mutu';
        if (p.refusBePar === 'OUI') return 'refused';
        return 'none';
    }

    function makeStyleForMode(feature, mode) {
        var p = feature.properties;
        var colorMap = COLORS[mode];
        var key;
        if (mode === 'type') key = p.Type_parki;
        else if (mode === 'mutu') key = getMutuKey(p);
        else if (mode === 'owner') key = p.Type_propr;
        else key = p.Potentiel;
        var color = (colorMap && (colorMap[key] || colorMap._default)) || '#595959';
        var nb = p.NB_TOTAL;
        return {
            radius: getRadius(nb),
            fillColor: color,
            color: color,
            weight: 1,
            opacity: 1,
            fillOpacity: (nb === null || nb === undefined) ? 0.4 : 0.85
        };
    }

    /* =========================================================
       LEGEND
       ========================================================= */

    function renderLegend(mode) {
        var wrapper = document.getElementById('legend_wrapper');
        if (!wrapper) return;

        var colorHtml = (LEGEND_CATS[mode] || []).map(function (cat) {
            var color = (COLORS[mode] || {})[cat] || '#595959';
            var label = T.categories[cat] || cat;
            return '<div class="legend-element">' +
                '<span class="color" style="background-color:' + color + ';"></span>' +
                '<span class="label">' + label + '</span>' +
                '</div>';
        }).join('');

        var sizes = [
            { w: 6, key: 'le10' },
            { w: 14, key: 'le50' },
            { w: 18, key: 'le100' },
            { w: 26, key: 'le500' },
            { w: 30, key: 'ge500' }
        ];
        var sizeHtml = sizes.map(function (s) {
            return '<div class="legend-element">' +
                '<span class="size-wrapper"><span class="size" style="width:' + s.w + 'px;height:' + s.w + 'px;"></span></span>' +
                '<span class="label">' + T.sizes[s.key] + '</span>' +
                '</div>';
        }).join('') +
            '<div class="legend-element unknown">' +
            '<span class="size-wrapper"><span class="size" style="width:12px;height:12px;"></span></span>' +
            '<span class="label">' + T.sizes.unknown + '</span>' +
            '</div>';

        wrapper.innerHTML =
            '<div class="legendContent">' +
            '<div class="legend color">' + colorHtml + '</div>' +
            '<div class="legend size">' + sizeHtml + '</div>' +
            '</div>';
    }

    /* =========================================================
       INFO PANEL
       ========================================================= */

    function renderInfo(props) {
        var infoDiv = document.getElementById('info');
        if (!infoDiv) return;

        var html = '<div class="main-info">';
        INFO_SECTIONS.forEach(function (section) {
            var rows = section.fields
                .filter(function (f) { return props[f] !== null && props[f] !== undefined; })
                .map(function (f) {
                    var lbl = T.fields[f] || f;
                    return '<div class="value">' +
                        '<div class="key">' + lbl + '</div>' +
                        '<div>' + props[f] + '</div>' +
                        '</div>';
                }).join('');
            if (rows) {
                html += '<div class="info-group">' +
                    '<h2>' + (T.sections[section.key] || section.key) + '</h2>' +
                    rows +
                    '</div>';
            }
        });
        html += '</div>';
        infoDiv.innerHTML = html;
        infoDiv.scrollTop = 0;
    }

    function resetInfo() {
        var infoDiv = document.getElementById('info');
        if (infoDiv) infoDiv.innerHTML = '<div class="intro">' + T.helptext + '</div>';
    }

    /* =========================================================
       MAP INITIALIZATION
       ========================================================= */

    function initMap() {
        var data = window.__PARKING_DATA;
        if (!data) {
            console.error('window.__PARKING_DATA not found. Ensure parking-data.js is loaded.');
            return;
        }

        /* --- Tile layers --- */
        var googleTerrain = L.tileLayer('https://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}', {
            attribution: '© Google',
            maxNativeZoom: 20,
            maxZoom: 22
        });
        var googleSatellite = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
            attribution: '© Google',
            maxNativeZoom: 20,
            maxZoom: 22
        });
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxNativeZoom: 19,
            maxZoom: 22
        });

        /* --- Map --- */
        var map = L.map('map', {
            center: [50.8621987, 4.38],
            zoom: 14,
            zoomControl: false,
            layers: [googleTerrain]
        });

        /* --- Title control (topleft, like DSD) --- */
        var titleControl = new L.Control({ position: 'topleft' });
        titleControl.onAdd = function () {
            var div = L.DomUtil.create('div', 'info map-title-control');
            div.innerHTML = '<h2>' + T.tree.appTitle + '<br>'
                + '<small style="display:block; margin-top:5px;">'
                + T.tree.appSubtitle + '</small></h2>';
            L.DomEvent.disableClickPropagation(div);
            return div;
        };
        titleControl.addTo(map);


        L.control.zoom({ position: 'topleft' }).addTo(map);
        L.control.locate({ locateOptions: { maxZoom: 19 } }).addTo(map);

        /* --- Schaerbeek boundary layers (added first so parking points render on top) --- */
        map.createPane('pane_limites');
        map.getPane('pane_limites').style.zIndex = 300;

        map.createPane('pane_quartiers');
        map.getPane('pane_quartiers').style.zIndex = 310;

        var layer_limites = L.geoJSON(json_LimitesSchaerbeek_2, {
            pane: 'pane_limites',
            style: {
                color: 'rgba(100,100,100,1.0)',
                weight: 2,
                fill: false,
                interactive: false
            }
        }).addTo(map);

        var layer_quartiers = L.geoJSON(json_QuartiersSchaerbeek_1, {
            pane: 'pane_quartiers',
            style: {
                color: 'rgba(88,151,202,1.0)',
                weight: 1.5,
                fill: true,
                fillColor: 'rgba(88,151,202,1.0)',
                fillOpacity: 0.1,
                interactive: true
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.SectorName) {
                    layer.bindPopup('<b>' + feature.properties.SectorName + '</b>', { maxWidth: 200 });
                }
            }
        }).addTo(map);

        /* --- Point-in-polygon (ray-casting) for quartier filter --- */
        function pointInRing(coord, ring) {
            var x = coord[0], y = coord[1], inside = false;
            for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
                var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
                if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
            }
            return inside;
        }
        function coordInQuartier(coord, feature) {
            var polys = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            return polys.some(function (poly) { return pointInRing(coord, poly[0]); });
        }
        var featureQuartierMap = {};
        data.features.forEach(function (f) {
            var coord = f.geometry.coordinates;
            for (var i = 0; i < json_QuartiersSchaerbeek_1.features.length; i++) {
                if (coordInQuartier(coord, json_QuartiersSchaerbeek_1.features[i])) {
                    featureQuartierMap[f.properties.id] = json_QuartiersSchaerbeek_1.features[i].properties.SectorName;
                    break;
                }
            }
        });

        /* --- One GeoJSON layer per display mode --- */
        var geoJsonLayers = {};
        MODES.forEach(function (mode) {
            geoJsonLayers[mode] = L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, makeStyleForMode(feature, mode));
                },
                onEachFeature: function (feature, layer) {
                    var nb = feature.properties.NB_TOTAL;
                    layer._origFillOpacity = (nb === null || nb === undefined) ? 0.4 : 0.85;
                    layer.on('click', function () {
                        renderInfo(feature.properties);
                    });
                }
            });
        });

        geoJsonLayers['type'].addTo(map);

        /* --- Layer tree control (matches DSD-Cycloparking1030 pattern) --- */
        var tl = T.tree;
        var overlaysTree = [
            {
                label: tl.vue, children: [
                    { label: T.legends.type, layer: geoJsonLayers['type'], radioGroup: 'mode' },
                    { label: T.legends.mutu, layer: geoJsonLayers['mutu'], radioGroup: 'mode' },
                    { label: T.legends.owner, layer: geoJsonLayers['owner'], radioGroup: 'mode' },
                    { label: T.legends.highlighted, layer: geoJsonLayers['highlighted'], radioGroup: 'mode' }
                ]
            },
            {
                label: tl.schaerbeek, selectAllCheckbox: true, children: [
                    { label: tl.limites, layer: layer_limites },
                    { label: tl.quartiers, layer: layer_quartiers }
                ]
            },
            { label: tl.terrain, radioGroup: 'bm', layer: googleTerrain },
            { label: tl.satellite, radioGroup: 'bm', layer: googleSatellite },
            { label: tl.osm, radioGroup: 'bm', layer: osm }
        ];

        L.control.layers.tree(null, overlaysTree, { collapsed: false }).addTo(map);

        /* --- Address search (Nominatim OSM via leaflet.photon) --- */
        var photonControl = L.control.photon({
            url: 'https://nominatim.openstreetmap.org/search?format=geojson&addressdetails=1&',
            feedbackLabel: '',
            position: 'topleft',
            includePosition: true,
            initial: true
        }).addTo(map);
        photonControl._container.childNodes[0].style.borderRadius = '10px';
        var photonEl = document.getElementsByClassName('leaflet-photon leaflet-control')[0];
        if (photonEl) {
            photonEl.classList.add('leaflet-control-search');
            photonEl.style.display = 'flex';
            photonEl.style.backgroundColor = 'rgba(255,255,255,0.5)';
            var searchBtn = document.createElement('div');
            searchBtn.id = 'gcd-button-control';
            searchBtn.className = 'gcd-gl-btn fa fa-search search-button';
            photonEl.insertBefore(searchBtn, photonEl.firstChild);
        }

        /* --- Reset button (Réinitialiser) + lang switch --- */
        L.Control.ResetButton = L.Control.extend({
            options: { position: 'topleft' },
            onAdd: function () {
                var div = L.DomUtil.create('div', 'quartier-filter-control');
                L.DomEvent.disableClickPropagation(div);
                L.DomEvent.disableScrollPropagation(div);
                var btn = document.createElement('button');
                btn.id = 'reinitialiser-btn';
                btn.textContent = tl.reinitialiser;
                btn.addEventListener('click', function () {
                    var sel = document.getElementById('quartier-filter-select');
                    if (sel) sel.value = '';
                    applyQuartierFilter('');
                    map.setView([50.8621987, 4.38], 14);
                });
                div.appendChild(btn);
                var langLink = document.createElement('a');
                langLink.href = T.tree.langHref;
                langLink.id = 'lang-switch-link';
                langLink.textContent = T.tree.langLabel;
                div.appendChild(langLink);
                return div;
            }
        });
        new L.Control.ResetButton().addTo(map);

        /* --- Quartier filter (spatial, point-in-polygon) --- */
        function applyQuartierFilter(q) {
            var all = (q === '');
            MODES.forEach(function (mode) {
                geoJsonLayers[mode].eachLayer(function (sub) {
                    var show = all || featureQuartierMap[sub.feature.properties.id] === q;
                    sub.setStyle({ opacity: show ? 1 : 0, fillOpacity: show ? sub._origFillOpacity : 0 });
                });
            });
        }

        var _quartierNames = [];
        json_QuartiersSchaerbeek_1.features.forEach(function (f) {
            if (f.properties.SectorName) _quartierNames.push(f.properties.SectorName);
        });
        _quartierNames.sort();

        L.Control.QuartierFilter = L.Control.extend({
            options: { position: 'topleft' },
            onAdd: function () {
                var div = L.DomUtil.create('div', 'quartier-filter-control');
                L.DomEvent.disableClickPropagation(div);
                L.DomEvent.disableScrollPropagation(div);
                var sel = document.createElement('select');
                sel.id = 'quartier-filter-select';
                var opt0 = document.createElement('option');
                opt0.value = '';
                opt0.text = tl.allQuartiers;
                sel.appendChild(opt0);
                _quartierNames.forEach(function (q) {
                    var opt = document.createElement('option');
                    opt.value = q; opt.text = q;
                    sel.appendChild(opt);
                });
                sel.addEventListener('change', function () { applyQuartierFilter(this.value); });
                div.appendChild(sel);
                return div;
            }
        });
        new L.Control.QuartierFilter().addTo(map);

        /* --- Update sidebar legend when mode layer changes --- */
        map.on('overlayadd', function (e) {
            MODES.forEach(function (mode) {
                if (e.layer === geoJsonLayers[mode]) {
                    renderLegend(mode);
                }
            });
        });

        /* --- Initial state --- */
        renderLegend('type');
        resetInfo();
    }

    /* =========================================================
       ENTRY POINT
       ========================================================= */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }

})();

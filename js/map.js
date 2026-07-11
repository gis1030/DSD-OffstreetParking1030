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
            'public': '#2ba6ff',
            commercial: '#335496',
            bePark: '#42dd73',
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
        type: ['ouvert', 'couvert_sous_sol', 'couvert_hors_sol', 'boxes_ilot', 'boxes_front_rue', 'mix', 'unknown'],
        mutu: ['public', 'commercial', 'bePark', 'none'],
        owner: ['public', 'privé', 'unknown'],
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
                commercial: 'Exploitation commerciale de parking',
                bePark: 'Mutualisé par BePark',
                none: 'Non mutualisé',
                'public': 'Public',
                'privé': 'Privé',
                'OUI': 'Site retenu',
                'NON': 'Non retenu',
                unknown: 'Inconnu'
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
                functions: 'Fonctions',
                more_info: 'Informations complémentaires',
                sources: 'Sources',
                comment: 'Commentaire',
                pdf: 'Rapport'
            },
            fields: {
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
                refusBePar: 'Demande de mutualisation BePark refusée',
                Type_propr: 'Type de propriétaire',
                Tx_remplis: 'Taux de remplissage du parking',
                Zone_RRU: 'Zone accessibilité du RRU',
                Nb_COBRACE: "Nombre d'emplacements autorisés selon le COBRACE",
                Quartier: 'Quartier',
                s_PE_IBGE: "Permis d'environnement (BE)",
                s_PACS: 'Données PACS',
                s_taxes: 'Données du règlement Taxe',
                s_ortho: 'Photo aérienne 2019',
                s_BePark: 'Données BePark',
                s_autre: 'Autre source de données',
                Remarque: 'Remarque',
                '30_PDF': 'PDF 30 places',
                '10_PDF': 'PDF 10 places'
            },
            words: {
                places: 'places',
                place: 'emplacement',
                including: 'dont',
                sharedPlaces: 'mutualisées',
                publicMutu: 'publiques',
                autreMutu: 'autre'
            },
            typeParkiFull: {
                ouvert: 'Ouvert',
                couvert_sous_sol: 'Couvert, en sous sol',
                couvert_hors_sol: 'Couvert, hors sol',
                boxes_ilot: 'Boxes en ilot',
                boxes_front_rue: 'Boxes côté rue',
                mix: 'Mix',
                mix_Boxes_Ouvert: 'Mix boxes/ouvert',
                mix_boxes_couvert: 'Mix boxes/couvert',
                mix_ss_ouvert: 'Mix sous-sol/ouvert',
                mix_ouvert_couvertHS: 'Mix ouvert/couvert',
                mix_couvert_boxes_ouvert: 'Mix couvert/boxes/ouvert',
                mix_ouvert_couvertHS_couvertSS: 'Mix ouvert/couvert (hors sol)/couvert (sous-sol)'
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
                commercial: 'Commerciële parkeerexploitatie',
                bePark: 'Gedeeld via BePark',
                none: 'Niet gemutualiseerd',
                'public': 'Publiek',
                'privé': 'Privé',
                'OUI': 'Weerhouden site',
                'NON': 'Niet weerhouden',
                unknown: 'Onbekend'
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
                functions: 'Functies',
                more_info: 'Aanvullende informatie',
                sources: 'Bronnen',
                comment: 'Opmerking',
                pdf: 'Rapport'
            },
            fields: {
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
                refusBePar: 'Verzoek om BePark verdeling afgewezen',
                Type_propr: 'Type eigenaar',
                Tx_remplis: 'Bezettingsgraad',
                Zone_RRU: 'Toegankelijkheid zone van RRU',
                Nb_COBRACE: 'Aantal vergunde plaatsen volgens COBRACE',
                Quartier: 'Wijk',
                s_PE_IBGE: 'Milieuvergunning',
                s_PACS: 'Pacs gegevens',
                s_taxes: 'Belasting reglement gegevens',
                s_ortho: 'Luchtphoto 2019',
                s_BePark: 'BePark gegevens',
                s_autre: 'Andere bron gegevens',
                Remarque: 'Opmerking',
                '30_PDF': 'PDF 30 plaatsen',
                '10_PDF': 'PDF 10 plaatsen'
            },
            words: {
                places: 'plaatsen',
                place: 'plaats',
                including: 'waaronder',
                sharedPlaces: 'gedeelde plaatsen',
                publicMutu: 'openbaar',
                autreMutu: 'andere'
            },
            typeParkiFull: {
                ouvert: 'Open',
                couvert_sous_sol: 'Gedekt, ondergronds',
                couvert_hors_sol: 'Gedekt, bovengronds',
                boxes_ilot: 'Boxes in binnenterreinen van huizenblokken',
                boxes_front_rue: 'Box aan de straatkant',
                mix: 'Mix',
                mix_Boxes_Ouvert: 'Mix box/open',
                mix_boxes_couvert: 'Mix box/gedekt',
                mix_ss_ouvert: 'Mix ondegronds/open',
                mix_ouvert_couvertHS: 'Mix open/gedekt',
                mix_couvert_boxes_ouvert: 'Mix gedekt/box/open',
                mix_ouvert_couvertHS_couvertSS: 'Mix open/gedekt(bovengronds)/gedekt(ondergronds)'
            },
            helptext: 'Selecteer een punt op de kaart om de gegevens te raadplegen'
        }
    };

    var T = TRANSLATIONS[lang] || TRANSLATIONS.fr;

    /* Généralités (address title, total places, Type de parking) isn't a table of
       key/value rows like the sections below — it's rendered separately by
       buildGeneralitiesHtml(), matching offstreet_1030_local/index-fr.html. */
    var INFO_SECTIONS = [
        { key: 'functions', fields: ['Résidenti', 'Bureaux', 'Commerces', 'Industries', 'Enseigneme', 'Cultu_spor', 'hotel', 'seniorie', 'Autre_equi', 'Pk_public'] },
        { key: 'more_info', fields: ['refusBePar', 'Type_propr', 'Tx_remplis', 'Zone_RRU', 'Nb_COBRACE', 'Quartier'] },
        { key: 'sources', fields: ['s_PE_IBGE', 's_PACS', 's_taxes', 's_ortho', 's_BePark', 's_autre'] },
        { key: 'comment', fields: ['Remarque'] },
        { key: 'pdf', fields: ['30_PDF', '10_PDF'] }
    ];

    /* Field rendering type, matching offstreet_1030_local/index-fr.html: determines
       whether/how a value is hidden or formatted. Unlisted fields default to 'string'. */
    var FIELD_TYPES = {
        Résidenti: 'number', Bureaux: 'number', Commerces: 'number', Industries: 'number',
        Enseigneme: 'number', Cultu_spor: 'number', hotel: 'number', seniorie: 'number',
        Autre_equi: 'number', Pk_public: 'number', Tx_remplis: 'number', Nb_COBRACE: 'number',
        refusBePar: 'refus',
        s_PE_IBGE: 'source', s_PACS: 'source', s_taxes: 'source', s_ortho: 'source',
        s_BePark: 'source', s_autre: 'source',
        Remarque: 'comment',
        '30_PDF': 'file', '10_PDF': 'file'
    };

    var MODES = ['type', 'mutu', 'owner', 'highlighted'];

    /* =========================================================
       STYLING
       ========================================================= */

    /* NB_TOTAL === 0 means "not yet quantified" here (the Excel export turns blank cells
       into 0 instead of leaving them empty) — same "à confirmer" case as a null/missing
       value in the original site, which uses null for it. */
    function isUnconfirmedNbTotal(nb) {
        return nb === null || nb === undefined || nb === 0;
    }

    function getRadius(nb) {
        if (isUnconfirmedNbTotal(nb)) return 6;
        if (nb <= 10) return 3;
        if (nb <= 50) return 7;
        if (nb <= 100) return 9;
        if (nb <= 500) return 13;
        return 15;
    }

    /* Matches the original site's classification (offstreet_1030_local/dist/bundle.js):
       first field that is > 0 wins, in this fixed priority order. */
    function getMutuKey(p) {
        if (p.Pk_public && p.Pk_public > 0) return 'public';
        if (p.Pk_com && p.Pk_com > 0) return 'commercial';
        if (p.dont_mutBP && p.dont_mutBP > 0) return 'bePark';
        return 'none';
    }

    /* Data has finer-grained "mix_*" subtypes (mix_ss_ouvert, mix_Boxes_Ouvert, ...)
       not present in LEGEND_CATS.type — fold them all into the single 'mix' category.
       Anything else unmatched (null, empty, typo, encoding mismatch, ...) falls back
       to 'unknown' so it's still accounted for by a checkbox/legend entry. */
    function normalizeTypeKey(key) {
        if (typeof key === 'string' && key.indexOf('mix') === 0) return 'mix';
        return (key === 'ouvert' || key === 'couvert_sous_sol' || key === 'couvert_hors_sol' ||
            key === 'boxes_ilot' || key === 'boxes_front_rue') ? key : 'unknown';
    }

    function normalizeOwnerKey(key) {
        return (key === 'public' || key === 'privé') ? key : 'unknown';
    }

    /* Matches the original site's classification (offstreet_1030_local/dist/bundle.js):
       a site is "retenu" when either final-selection field has at least one place. */
    function getHighlightedKey(p) {
        var is30 = p['30_FINAL'] !== null && p['30_FINAL'] !== undefined && p['30_FINAL'] >= 1;
        var is10 = p['10_FINAL'] !== null && p['10_FINAL'] !== undefined && p['10_FINAL'] >= 1;
        return (is30 || is10) ? 'OUI' : 'NON';
    }

    function getKeyForMode(feature, mode) {
        var p = feature.properties;
        if (mode === 'type') return normalizeTypeKey(p.Type_parki);
        if (mode === 'mutu') return getMutuKey(p);
        if (mode === 'owner') return normalizeOwnerKey(p.Type_propr);
        return getHighlightedKey(p);
    }

    function makeStyleForMode(feature, mode) {
        var p = feature.properties;
        var colorMap = COLORS[mode];
        var key = getKeyForMode(feature, mode);
        var color = (colorMap && (colorMap[key] || colorMap._default)) || '#595959';
        var nb = p.NB_TOTAL;
        var unconfirmed = isUnconfirmedNbTotal(nb);
        return {
            radius: getRadius(nb),
            fillColor: color,
            color: color,
            weight: unconfirmed ? 2 : 1,
            opacity: 1,
            fillOpacity: unconfirmed ? 0 : 0.85
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

    /* Address title + total places + Type de parking, as three independent lines
       (no table, no field labels) — matches offstreet_1030_local/index-fr.html. */
    function buildGeneralitiesHtml(props) {
        var streetName = (lang === 'fr') ? props.pn_name_fre : props.pn_name_dut;
        var title = streetName ?
            (streetName + (props.adrn !== null && props.adrn !== undefined ? ' ' + props.adrn : '')) :
            ((props.ID_adr_Urb !== null && props.ID_adr_Urb !== undefined) ? String(props.ID_adr_Urb) : '');
        var html = '<h2 class="adress">' + title + '</h2>';

        if (!isUnconfirmedNbTotal(props.NB_TOTAL)) {
            var placesWord = props.NB_TOTAL > 1 ? T.words.places : T.words.place;
            var line = props.NB_TOTAL + ' ' + placesWord;
            if (props.dont_mutua && props.dont_mutua > 0) {
                var source = (props.Pk_public && props.Pk_public > 0) ? T.words.publicMutu :
                    (props.Pk_com && props.Pk_com > 0) ? T.words.autreMutu : 'BePark';
                line += ' ' + T.words.including + ' ' + props.dont_mutua + ' ' + T.words.sharedPlaces + ' (' + source + ')';
            }
            html += '<div class="total"><div class="value">' + line + '</div></div>';
        }

        if (props.Type_parki) {
            html += '<div class="type"><div class="value">' + (T.typeParkiFull[props.Type_parki] || props.Type_parki) + '</div></div>';
        }
        return html;
    }

    function renderInfo(props) {
        var infoDiv = document.getElementById('info');
        if (!infoDiv) return;

        var html = '<div class="main-info">' + buildGeneralitiesHtml(props);
        INFO_SECTIONS.forEach(function (section) {
            var rows = section.fields
                .filter(function (f) {
                    var v = props[f];
                    if (v === null || v === undefined) return false;
                    var type = FIELD_TYPES[f];
                    if ((type === 'number' || type === 'source') && v === 0) return false;
                    if (type === 'refus' && v === 'NON') return false;
                    return true;
                })
                .map(function (f) {
                    var v = props[f];
                    var type = FIELD_TYPES[f];
                    if (type === 'source') {
                        return '<div class="source">' + (T.fields[f] || f) + '</div>';
                    }
                    if (type === 'comment') {
                        return '<div class="value Remarque"><div>' + v + '</div></div>';
                    }
                    if (type === 'file') {
                        return '<div class="value"><a class="pdf-download" href="pdf/' + v + '.pdf" target="_blank">' + v + '</a></div>';
                    }
                    var lbl = T.fields[f] || f;
                    return '<div class="value">' +
                        '<div class="key">' + lbl + '</div>' +
                        '<div>' + v + '</div>' +
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

        map.attributionControl.setPrefix(
            '©GeoData1030: <a href="mailto:geodata.gis1030@gmail.com">geodata.gis1030@gmail.com</a> ' +
            '<a href="https://www.1030.be/" target="_blank">' + T.tree.appSubtitle + '</a> &middot; ' +
            '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        );

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

        /* --- Watermark: logo 1030 (bottom left) --- */
        L.Control.Watermark = L.Control.extend({
            onAdd: function () {
                var img = L.DomUtil.create('img');
                img.src = './css/images/schaerbeek1030_logo.png';
                img.style.width = '75px';
                return img;
            }
        });
        L.control.watermark = function (opts) { return new L.Control.Watermark(opts); };
        L.control.watermark({ position: 'bottomleft' }).addTo(map);

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

        /* --- Quartier per parking, read directly from the data (matches SectorName) --- */
        var featureQuartierMap = {};
        data.features.forEach(function (f) {
            featureQuartierMap[f.properties.ID] = f.properties.Quartier;
        });

        /* --- One GeoJSON layer per display mode --- */
        var geoJsonLayers = {};
        var selectedLayer = null;
        MODES.forEach(function (mode) {
            geoJsonLayers[mode] = L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, makeStyleForMode(feature, mode));
                },
                onEachFeature: function (feature, layer) {
                    var nb = feature.properties.NB_TOTAL;
                    layer._origFillOpacity = isUnconfirmedNbTotal(nb) ? 0 : 0.85;
                    layer.on('click', function () {
                        if (selectedLayer && selectedLayer !== layer) {
                            selectedLayer.setStyle(makeStyleForMode(selectedLayer.feature, selectedLayer._mode));
                        }
                        var baseStyle = makeStyleForMode(feature, mode);
                        layer.setStyle({ color: baseStyle.color, weight: 3, fillColor: '#ffffff', fillOpacity: 1 });
                        layer._mode = mode;
                        selectedLayer = layer;
                        renderInfo(feature.properties);
                    });
                }
            });
        });

        geoJsonLayers['type'].addTo(map);

        /* --- Proxy layers driving each mode's category checkboxes --- */
        var categoryLayers = {};
        MODES.forEach(function (mode) {
            categoryLayers[mode] = {};
            LEGEND_CATS[mode].forEach(function (cat) {
                categoryLayers[mode][cat] = L.layerGroup().addTo(map);
            });
        });

        /* --- Layer tree control (matches DSD-Cycloparking1030 pattern) --- */
        var tl = T.tree;
        var overlaysTree = [
            {
                label: tl.vue, children: MODES.map(function (mode) {
                    return {
                        label: '<b>' + T.legends[mode] + '</b>', layer: geoJsonLayers[mode], radioGroup: 'mode',
                        collapsed: mode !== 'type',
                        children: LEGEND_CATS[mode].map(function (cat) {
                            return { label: T.categories[cat], layer: categoryLayers[mode][cat] };
                        })
                    };
                })
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

        var layersControl = L.control.layers.tree(null, overlaysTree, { collapsed: false }).addTo(map);

        /* --- Make the layers panel collapsible: Leaflet only wires the
           expand/collapse listeners when the control starts collapsed, so
           the toggle button is bound manually here. --- */
        var layersToggle = layersControl._container.querySelector('.leaflet-control-layers-toggle');
        if (layersToggle) {
            // Leaflet itself binds click->expand (touch) or focus->expand (desktop) on this
            // element; both fire before our own listener and force it back open, so remove
            // them first or the toggle only ever re-expands and never stays collapsed.
            L.DomEvent.off(layersToggle, 'click');
            L.DomEvent.off(layersToggle, 'focus');
            L.DomEvent.on(layersToggle, 'click', function (e) {
                L.DomEvent.stop(e);
                if (L.DomUtil.hasClass(layersControl._container, 'leaflet-control-layers-expanded')) {
                    layersControl.collapse();
                } else {
                    layersControl.expand();
                }
            });
        }

        /* --- Address search (Nominatim OSM via leaflet.photon) --- */
        var searchIcon = L.icon({
            iconUrl: './markers/1030_Icon.png',
            iconSize: [20, 24],
            iconAnchor: [10, 24]
        });
        var searchMarker = null;
        var photonControl = L.control.photon({
            url: 'https://nominatim.openstreetmap.org/search?format=geojson&addressdetails=1&',
            feedbackLabel: '',
            position: 'topleft',
            includePosition: true,
            initial: true,
            onSelected: function (feature) {
                var latlng = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
                map.setView(latlng, 16);
                if (searchMarker) map.removeLayer(searchMarker);
                searchMarker = L.marker(latlng, { icon: searchIcon }).addTo(map);
            }
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

            /* --- Collapsed by default: input hidden until the magnifier is clicked --- */
            var searchInput = photonEl.lastChild;
            searchInput.style.display = 'none';
            searchBtn.addEventListener('click', function () {
                searchInput.style.display = (searchInput.style.display === 'none') ? 'block' : 'none';
            });
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

        /* --- Quartier + category filters (spatial point-in-polygon + per-mode checkboxes) --- */
        var currentQuartier = '';
        var categoryVisible = {};
        MODES.forEach(function (mode) {
            categoryVisible[mode] = {};
            LEGEND_CATS[mode].forEach(function (cat) { categoryVisible[mode][cat] = true; });
        });

        function refreshLayerVisibility() {
            var all = (currentQuartier === '');
            MODES.forEach(function (mode) {
                geoJsonLayers[mode].eachLayer(function (sub) {
                    var show = all || featureQuartierMap[sub.feature.properties.ID] === currentQuartier;
                    var key = getKeyForMode(sub.feature, mode);
                    show = show && categoryVisible[mode][key] !== false;
                    sub.setStyle({ opacity: show ? 1 : 0, fillOpacity: show ? sub._origFillOpacity : 0 });
                });
            });
        }

        function applyQuartierFilter(q) {
            currentQuartier = q;
            refreshLayerVisibility();
        }

        map.on('overlayadd overlayremove', function (e) {
            MODES.forEach(function (mode) {
                LEGEND_CATS[mode].forEach(function (cat) {
                    if (e.layer === categoryLayers[mode][cat]) {
                        categoryVisible[mode][cat] = (e.type === 'overlayadd');
                        refreshLayerVisibility();
                    }
                });
            });
        });

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

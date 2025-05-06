var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_prov_bcn_1 = new ol.format.GeoJSON();
var features_prov_bcn_1 = format_prov_bcn_1.readFeatures(json_prov_bcn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prov_bcn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prov_bcn_1.addFeatures(features_prov_bcn_1);
var lyr_prov_bcn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prov_bcn_1, 
                style: style_prov_bcn_1,
                popuplayertitle: 'prov_bcn',
                interactive: false,
                title: '<img src="styles/legend/prov_bcn_1.png" /> prov_bcn'
            });
var format_punts_interes_2 = new ol.format.GeoJSON();
var features_punts_interes_2 = format_punts_interes_2.readFeatures(json_punts_interes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punts_interes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punts_interes_2.addFeatures(features_punts_interes_2);
var lyr_punts_interes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_punts_interes_2, 
                style: style_punts_interes_2,
                popuplayertitle: 'punts_interes',
                interactive: true,
    title: 'punts_interes<br />\
    <img src="styles/legend/punts_interes_2_0.png" /> 1<br />\
    <img src="styles/legend/punts_interes_2_1.png" /> 2<br />\
    <img src="styles/legend/punts_interes_2_2.png" /> 3<br />\
    <img src="styles/legend/punts_interes_2_3.png" /> 4<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_prov_bcn_1.setVisible(true);lyr_punts_interes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_prov_bcn_1,lyr_punts_interes_2];
lyr_prov_bcn_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'LEGSTATUS': 'LEGSTATUS', 'ACCURACY': 'ACCURACY', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_punts_interes_2.set('fieldAliases', {'fid': 'fid', 'popup_text': 'popup_text', });
lyr_prov_bcn_1.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'LEGSTATUS': 'TextEdit', 'ACCURACY': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'DateTime', 'URL_RESOUR': 'TextEdit', });
lyr_punts_interes_2.set('fieldImages', {'fid': 'TextEdit', 'popup_text': 'TextEdit', });
lyr_prov_bcn_1.set('fieldLabels', {'INSPIREID': 'inline label - always visible', 'NATIONALCO': 'inline label - always visible', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'LEGSTATUS': 'no label', 'ACCURACY': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_punts_interes_2.set('fieldLabels', {'fid': 'hidden field', 'popup_text': 'no label', });
lyr_punts_interes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
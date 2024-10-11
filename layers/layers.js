var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_PuneWardspuneelectoralwards_2022__pune2022wards_1 = new ol.format.GeoJSON();
var features_PuneWardspuneelectoralwards_2022__pune2022wards_1 = format_PuneWardspuneelectoralwards_2022__pune2022wards_1.readFeatures(json_PuneWardspuneelectoralwards_2022__pune2022wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneWardspuneelectoralwards_2022__pune2022wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneWardspuneelectoralwards_2022__pune2022wards_1.addFeatures(features_PuneWardspuneelectoralwards_2022__pune2022wards_1);
var lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuneWardspuneelectoralwards_2022__pune2022wards_1, 
                style: style_PuneWardspuneelectoralwards_2022__pune2022wards_1,
                popuplayertitle: "Pune Wards- puneelectoralwards_2022__pune2022wards",
                interactive: true,
                title: '<img src="styles/legend/PuneWardspuneelectoralwards_2022__pune2022wards_1.png" /> Pune Wards- puneelectoralwards_2022__pune2022wards'
            });
var format_pcmcelectoralwards_2 = new ol.format.GeoJSON();
var features_pcmcelectoralwards_2 = format_pcmcelectoralwards_2.readFeatures(json_pcmcelectoralwards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pcmcelectoralwards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pcmcelectoralwards_2.addFeatures(features_pcmcelectoralwards_2);
var lyr_pcmcelectoralwards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pcmcelectoralwards_2, 
                style: style_pcmcelectoralwards_2,
                popuplayertitle: "pcmc-electoral-wards",
                interactive: true,
                title: '<img src="styles/legend/pcmcelectoralwards_2.png" /> pcmc-electoral-wards'
            });
var format_PCMC_wardsPCMC_electoral_wards_3 = new ol.format.GeoJSON();
var features_PCMC_wardsPCMC_electoral_wards_3 = format_PCMC_wardsPCMC_electoral_wards_3.readFeatures(json_PCMC_wardsPCMC_electoral_wards_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCMC_wardsPCMC_electoral_wards_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCMC_wardsPCMC_electoral_wards_3.addFeatures(features_PCMC_wardsPCMC_electoral_wards_3);
var lyr_PCMC_wardsPCMC_electoral_wards_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCMC_wardsPCMC_electoral_wards_3, 
                style: style_PCMC_wardsPCMC_electoral_wards_3,
                popuplayertitle: "PCMC_wards — PCMC_electoral_wards",
                interactive: true,
                title: 'PCMC_wards — PCMC_electoral_wards'
            });
var format_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4 = new ol.format.GeoJSON();
var features_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4 = format_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.readFeatures(json_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.addFeatures(features_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4);
var lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4, 
                style: style_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4,
                popuplayertitle: "pune-electoral-wards-2022 — puneelectoralwards_2022__pune2022wards",
                interactive: true,
                title: 'pune-electoral-wards-2022 — puneelectoralwards_2022__pune2022wards'
            });
var format_PuneCity_OL_FilteredSet_5 = new ol.format.GeoJSON();
var features_PuneCity_OL_FilteredSet_5 = format_PuneCity_OL_FilteredSet_5.readFeatures(json_PuneCity_OL_FilteredSet_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneCity_OL_FilteredSet_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneCity_OL_FilteredSet_5.addFeatures(features_PuneCity_OL_FilteredSet_5);
var lyr_PuneCity_OL_FilteredSet_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuneCity_OL_FilteredSet_5, 
                style: style_PuneCity_OL_FilteredSet_5,
                popuplayertitle: "PuneCity_OL_FilteredSet",
                interactive: true,
                title: '<img src="styles/legend/PuneCity_OL_FilteredSet_5.png" /> PuneCity_OL_FilteredSet'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1.setVisible(true);lyr_pcmcelectoralwards_2.setVisible(true);lyr_PCMC_wardsPCMC_electoral_wards_3.setVisible(true);lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.setVisible(true);lyr_PuneCity_OL_FilteredSet_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1,lyr_pcmcelectoralwards_2,lyr_PCMC_wardsPCMC_electoral_wards_3,lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4,lyr_PuneCity_OL_FilteredSet_5];
lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1.set('fieldAliases', {'name': 'name', 'description': 'description', 'wardnum': 'wardnum', 'origin': 'origin', 'Name1': 'Name1', 'Name2': 'Name2', 'Population': 'Population', });
lyr_pcmcelectoralwards_2.set('fieldAliases', {'name': 'name', 'zone': 'zone', 'wardnum': 'wardnum', });
lyr_PCMC_wardsPCMC_electoral_wards_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'zone': 'zone', 'wardnum': 'wardnum', });
lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'wardnum': 'wardnum', 'origin': 'origin', 'Name1': 'Name1', 'Name2': 'Name2', });
lyr_PuneCity_OL_FilteredSet_5.set('fieldAliases', {'BRANCH': 'BRANCH', 'WD': 'WD', 'DS_TL_ID': 'DS_TL_ID', 'OUTLET_ID': 'OUTLET_ID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BASE_GOI_MARKET_ID': 'BASE_GOI_MARKET_ID', 'BASE_GOI_MARKET_NAME': 'BASE_GOI_MARKET_NAME', });
lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'wardnum': 'Range', 'origin': 'TextEdit', 'Name1': 'TextEdit', 'Name2': 'TextEdit', 'Population': 'TextEdit', });
lyr_pcmcelectoralwards_2.set('fieldImages', {'name': 'TextEdit', 'zone': 'TextEdit', 'wardnum': 'KeyValue', });
lyr_PCMC_wardsPCMC_electoral_wards_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'zone': 'TextEdit', 'wardnum': 'TextEdit', });
lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'wardnum': '', 'origin': '', 'Name1': '', 'Name2': '', });
lyr_PuneCity_OL_FilteredSet_5.set('fieldImages', {'BRANCH': 'TextEdit', 'WD': 'TextEdit', 'DS_TL_ID': 'Range', 'OUTLET_ID': 'Range', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'BASE_GOI_MARKET_ID': 'TextEdit', 'BASE_GOI_MARKET_NAME': 'TextEdit', });
lyr_PuneWardspuneelectoralwards_2022__pune2022wards_1.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'wardnum': 'no label', 'origin': 'no label', 'Name1': 'no label', 'Name2': 'no label', 'Population': 'no label', });
lyr_pcmcelectoralwards_2.set('fieldLabels', {'name': 'no label', 'zone': 'no label', 'wardnum': 'no label', });
lyr_PCMC_wardsPCMC_electoral_wards_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'zone': 'no label', 'wardnum': 'no label', });
lyr_puneelectoralwards2022puneelectoralwards_2022__pune2022wards_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'wardnum': 'no label', 'origin': 'no label', 'Name1': 'no label', 'Name2': 'no label', });
lyr_PuneCity_OL_FilteredSet_5.set('fieldLabels', {'BRANCH': 'no label', 'WD': 'no label', 'DS_TL_ID': 'no label', 'OUTLET_ID': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'BASE_GOI_MARKET_ID': 'no label', 'BASE_GOI_MARKET_NAME': 'no label', });
lyr_PuneCity_OL_FilteredSet_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
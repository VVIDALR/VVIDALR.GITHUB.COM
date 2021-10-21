var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MANZANAS_1 = new ol.format.GeoJSON();
var features_MANZANAS_1 = format_MANZANAS_1.readFeatures(json_MANZANAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_1.addFeatures(features_MANZANAS_1);
var lyr_MANZANAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_1, 
                style: style_MANZANAS_1,
                interactive: true,
    title: 'MANZANAS<br />\
    <img src="styles/legend/MANZANAS_1_0.png" /> 0 - 269 <br />\
    <img src="styles/legend/MANZANAS_1_1.png" /> 269 - 537 <br />\
    <img src="styles/legend/MANZANAS_1_2.png" /> 537 - 806 <br />\
    <img src="styles/legend/MANZANAS_1_3.png" /> 806 - 1074 <br />\
    <img src="styles/legend/MANZANAS_1_4.png" /> 1074 - 1343 <br />'
        });
var format_COMUNAS_CACHAPOAL2_2 = new ol.format.GeoJSON();
var features_COMUNAS_CACHAPOAL2_2 = format_COMUNAS_CACHAPOAL2_2.readFeatures(json_COMUNAS_CACHAPOAL2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNAS_CACHAPOAL2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNAS_CACHAPOAL2_2.addFeatures(features_COMUNAS_CACHAPOAL2_2);
var lyr_COMUNAS_CACHAPOAL2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMUNAS_CACHAPOAL2_2, 
                style: style_COMUNAS_CACHAPOAL2_2,
                interactive: false,
                title: '<img src="styles/legend/COMUNAS_CACHAPOAL2_2.png" /> COMUNAS_CACHAPOAL2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MANZANAS_1.setVisible(true);lyr_COMUNAS_CACHAPOAL2_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MANZANAS_1,lyr_COMUNAS_CACHAPOAL2_2];
lyr_MANZANAS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CUT': 'CUT', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'MANZENT_I': 'MANZENT_I', 'DISTRITO': 'DISTRITO', 'COD_DISTRI': 'COD_DISTRI', 'COD_LOCALI': 'COD_LOCALI', 'COD_ENTIDA': 'COD_ENTIDA', 'CATEGORIA': 'CATEGORIA', 'COD_CATEGO': 'COD_CATEGO', 'PERSONAS': 'PERSONAS', 'HOMBRES': 'HOMBRES', 'MUJERES': 'MUJERES', 'DE_0_A_5_A': 'DE_0_A_5_A', 'DE_6_A_14_': 'DE_6_A_14_', 'DE_15_A_64': 'DE_15_A_64', 'DE_65_MAS_': 'DE_65_MAS_', 'INMIGRANTE': 'INMIGRANTE', 'PUEBLOS_OR': 'PUEBLOS_OR', 'VIVIENDAS_': 'VIVIENDAS_', 'VIVIENDA_1': 'VIVIENDA_1', 'VIV_OCUPAD': 'VIV_OCUPAD', 'TOTAL_VIVI': 'TOTAL_VIVI', 'TOT_HOGARE': 'TOT_HOGARE', 'CASA': 'CASA', 'DEPTO': 'DEPTO', 'VIV_INDIGE': 'VIV_INDIGE', 'CONVENTILL': 'CONVENTILL', 'MEDIAGUA': 'MEDIAGUA', 'MOVIL': 'MOVIL', 'OTRA_VIV_P': 'OTRA_VIV_P', 'VIV_HORMIG': 'VIV_HORMIG', 'VIV_ALBANI': 'VIV_ALBANI', 'VIV_TABIQU': 'VIV_TABIQU', 'VIV_TABI_1': 'VIV_TABI_1', 'VIV_ADOBE': 'VIV_ADOBE', 'VIV_PARED_': 'VIV_PARED_', 'VIV_TEJAS_': 'VIV_TEJAS_', 'VIV_LOSA_H': 'VIV_LOSA_H', 'VIV_PLANCH': 'VIV_PLANCH', 'VIV_FONOLI': 'VIV_FONOLI', 'VIV_PAJA': 'VIV_PAJA', 'VIV_TECHO_': 'VIV_TECHO_', 'VIV_SIN_TE': 'VIV_SIN_TE', 'VIV_PARQUE': 'VIV_PARQUE', 'VIV_RADIER': 'VIV_RADIER', 'VIV_BALDOS': 'VIV_BALDOS', 'VIV_CAPA_C': 'VIV_CAPA_C', 'VIV_PISO_T': 'VIV_PISO_T', 'IND_MAT_AC': 'IND_MAT_AC', 'IND_MAT_RE': 'IND_MAT_RE', 'IND_MAT_IR': 'IND_MAT_IR', 'VIV_AGUA_R': 'VIV_AGUA_R', 'VIV_AGUA_P': 'VIV_AGUA_P', 'VIV_AGUA_C': 'VIV_AGUA_C', 'VIV_AGUA_1': 'VIV_AGUA_1', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_COMUNAS_CACHAPOAL2_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'PROVINCIA': 'PROVINCIA', 'NOM_PROVIN': 'NOM_PROVIN', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'CUT2': 'CUT2', 'COMUNAS': 'COMUNAS', 'CUT2_1': 'CUT2_1', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MANZANAS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CUT': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'MANZENT_I': 'TextEdit', 'DISTRITO': 'TextEdit', 'COD_DISTRI': 'TextEdit', 'COD_LOCALI': 'TextEdit', 'COD_ENTIDA': 'TextEdit', 'CATEGORIA': 'TextEdit', 'COD_CATEGO': 'TextEdit', 'PERSONAS': 'TextEdit', 'HOMBRES': 'TextEdit', 'MUJERES': 'TextEdit', 'DE_0_A_5_A': 'TextEdit', 'DE_6_A_14_': 'TextEdit', 'DE_15_A_64': 'TextEdit', 'DE_65_MAS_': 'TextEdit', 'INMIGRANTE': 'TextEdit', 'PUEBLOS_OR': 'TextEdit', 'VIVIENDAS_': 'TextEdit', 'VIVIENDA_1': 'TextEdit', 'VIV_OCUPAD': 'TextEdit', 'TOTAL_VIVI': 'TextEdit', 'TOT_HOGARE': 'TextEdit', 'CASA': 'TextEdit', 'DEPTO': 'TextEdit', 'VIV_INDIGE': 'TextEdit', 'CONVENTILL': 'TextEdit', 'MEDIAGUA': 'TextEdit', 'MOVIL': 'TextEdit', 'OTRA_VIV_P': 'TextEdit', 'VIV_HORMIG': 'TextEdit', 'VIV_ALBANI': 'TextEdit', 'VIV_TABIQU': 'TextEdit', 'VIV_TABI_1': 'TextEdit', 'VIV_ADOBE': 'TextEdit', 'VIV_PARED_': 'TextEdit', 'VIV_TEJAS_': 'TextEdit', 'VIV_LOSA_H': 'TextEdit', 'VIV_PLANCH': 'TextEdit', 'VIV_FONOLI': 'TextEdit', 'VIV_PAJA': 'TextEdit', 'VIV_TECHO_': 'TextEdit', 'VIV_SIN_TE': 'TextEdit', 'VIV_PARQUE': 'TextEdit', 'VIV_RADIER': 'TextEdit', 'VIV_BALDOS': 'TextEdit', 'VIV_CAPA_C': 'TextEdit', 'VIV_PISO_T': 'TextEdit', 'IND_MAT_AC': 'TextEdit', 'IND_MAT_RE': 'TextEdit', 'IND_MAT_IR': 'TextEdit', 'VIV_AGUA_R': 'TextEdit', 'VIV_AGUA_P': 'TextEdit', 'VIV_AGUA_C': 'TextEdit', 'VIV_AGUA_1': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_COMUNAS_CACHAPOAL2_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'CUT2': 'Range', 'COMUNAS': 'TextEdit', 'CUT2_1': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MANZANAS_1.set('fieldLabels', {'OBJECTID': 'no label', 'CUT': 'header label', 'REGION': 'header label', 'PROVINCIA': 'header label', 'COMUNA': 'header label', 'MANZENT_I': 'header label', 'DISTRITO': 'header label', 'COD_DISTRI': 'header label', 'COD_LOCALI': 'header label', 'COD_ENTIDA': 'header label', 'CATEGORIA': 'header label', 'COD_CATEGO': 'header label', 'PERSONAS': 'header label', 'HOMBRES': 'header label', 'MUJERES': 'header label', 'DE_0_A_5_A': 'header label', 'DE_6_A_14_': 'header label', 'DE_15_A_64': 'header label', 'DE_65_MAS_': 'header label', 'INMIGRANTE': 'header label', 'PUEBLOS_OR': 'header label', 'VIVIENDAS_': 'header label', 'VIVIENDA_1': 'header label', 'VIV_OCUPAD': 'header label', 'TOTAL_VIVI': 'header label', 'TOT_HOGARE': 'header label', 'CASA': 'header label', 'DEPTO': 'header label', 'VIV_INDIGE': 'header label', 'CONVENTILL': 'header label', 'MEDIAGUA': 'header label', 'MOVIL': 'header label', 'OTRA_VIV_P': 'header label', 'VIV_HORMIG': 'header label', 'VIV_ALBANI': 'header label', 'VIV_TABIQU': 'header label', 'VIV_TABI_1': 'header label', 'VIV_ADOBE': 'header label', 'VIV_PARED_': 'header label', 'VIV_TEJAS_': 'header label', 'VIV_LOSA_H': 'header label', 'VIV_PLANCH': 'header label', 'VIV_FONOLI': 'header label', 'VIV_PAJA': 'header label', 'VIV_TECHO_': 'header label', 'VIV_SIN_TE': 'header label', 'VIV_PARQUE': 'header label', 'VIV_RADIER': 'header label', 'VIV_BALDOS': 'header label', 'VIV_CAPA_C': 'header label', 'VIV_PISO_T': 'header label', 'IND_MAT_AC': 'header label', 'IND_MAT_RE': 'header label', 'IND_MAT_IR': 'header label', 'VIV_AGUA_R': 'header label', 'VIV_AGUA_P': 'header label', 'VIV_AGUA_C': 'header label', 'VIV_AGUA_1': 'header label', 'SHAPE_Leng': 'header label', 'SHAPE_Area': 'header label', });
lyr_COMUNAS_CACHAPOAL2_2.set('fieldLabels', {'OBJECTID': 'no label', 'REGION': 'no label', 'NOM_REGION': 'no label', 'PROVINCIA': 'no label', 'NOM_PROVIN': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'CUT2': 'no label', 'COMUNAS': 'no label', 'CUT2_1': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_COMUNAS_CACHAPOAL2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
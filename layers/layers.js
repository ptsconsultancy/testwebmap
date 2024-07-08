ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([380003.946484, 109974.462133, 417987.393332, 131257.338237]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.481000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ChaseChalke_XYZ_LRM_1 = new ol.layer.Tile({
            'title': 'ChaseChalke_XYZ_LRM',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://9ovuruy7c6.execute-api.eu-west-2.amazonaws.com/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@1x?url=s3://chase-chalke-cotp/processed/dtm/local-relief-model.tif&bidx=1&unscale=false&resampling=nearest&rescale=-0.5,0.5&return_mask=true'
            })
        });
var format_pits_final_2 = new ol.format.GeoJSON();
var features_pits_final_2 = format_pits_final_2.readFeatures(json_pits_final_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_pits_final_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pits_final_2.addFeatures(features_pits_final_2);
var lyr_pits_final_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pits_final_2, 
                style: style_pits_final_2,
                popuplayertitle: "pits_final",
                interactive: true,
                title: '<img src="styles/legend/pits_final_2.png" /> pits_final'
            });
var format_pits_formations_3 = new ol.format.GeoJSON();
var features_pits_formations_3 = format_pits_formations_3.readFeatures(json_pits_formations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_pits_formations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pits_formations_3.addFeatures(features_pits_formations_3);
var lyr_pits_formations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pits_formations_3, 
                style: style_pits_formations_3,
                popuplayertitle: "pits_formations",
                interactive: true,
                title: '<img src="styles/legend/pits_formations_3.png" /> pits_formations'
            });
var format_CCLPLiDARminimumarea_4 = new ol.format.GeoJSON();
var features_CCLPLiDARminimumarea_4 = format_CCLPLiDARminimumarea_4.readFeatures(json_CCLPLiDARminimumarea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_CCLPLiDARminimumarea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCLPLiDARminimumarea_4.addFeatures(features_CCLPLiDARminimumarea_4);
var lyr_CCLPLiDARminimumarea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCLPLiDARminimumarea_4, 
                style: style_CCLPLiDARminimumarea_4,
                popuplayertitle: "CCLP LiDAR minimum area",
                interactive: true,
                title: '<img src="styles/legend/CCLPLiDARminimumarea_4.png" /> CCLP LiDAR minimum area'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ChaseChalke_XYZ_LRM_1.setVisible(true);lyr_pits_final_2.setVisible(true);lyr_pits_formations_3.setVisible(true);lyr_CCLPLiDARminimumarea_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ChaseChalke_XYZ_LRM_1,lyr_pits_final_2,lyr_pits_formations_3,lyr_CCLPLiDARminimumarea_4];
lyr_pits_final_2.set('fieldAliases', {'get': 'get', 'ges': 'ges', 'gep': 'gep', 'get_': 'get_', 'ges_': 'ges_', 'gep_': 'gep_', 'chi_fid': 'chi_fid', 'cclp_numbe': 'cclp_numbe', 'review_sta': 'review_sta', 'review_del': 'review_del', 'geo_fid': 'geo_fid', 'url': 'url', 'compiler': 'compiler', 'compiledon': 'compiledon', 'rowid_pre-': 'rowid_pre-', 'rowid': 'rowid', });
lyr_pits_formations_3.set('fieldAliases', {'get': 'get', 'ges': 'ges', 'gep': 'gep', 'get_': 'get_', 'ges_': 'ges_', 'gep_': 'gep_', 'chi_fid': 'chi_fid', 'cclp_numbe': 'cclp_numbe', 'review_sta': 'review_sta', 'review_del': 'review_del', 'geo_fid': 'geo_fid', 'url': 'url', 'compiler': 'compiler', 'compiledon': 'compiledon', 'rowid_pre-': 'rowid_pre-', 'rowid': 'rowid', 'Super_clay': 'Super_clay', 'Bed_chalk': 'Bed_chalk', });
lyr_CCLPLiDARminimumarea_4.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'AreaII': 'AreaII', 'Area_': 'Area_', });
lyr_pits_final_2.set('fieldImages', {'get': 'TextEdit', 'ges': 'TextEdit', 'gep': 'TextEdit', 'get_': 'TextEdit', 'ges_': 'TextEdit', 'gep_': 'TextEdit', 'chi_fid': 'TextEdit', 'cclp_numbe': 'TextEdit', 'review_sta': 'TextEdit', 'review_del': 'TextEdit', 'geo_fid': 'TextEdit', 'url': 'TextEdit', 'compiler': 'TextEdit', 'compiledon': 'DateTime', 'rowid_pre-': 'TextEdit', 'rowid': 'TextEdit', });
lyr_pits_formations_3.set('fieldImages', {'get': 'TextEdit', 'ges': 'TextEdit', 'gep': 'TextEdit', 'get_': 'TextEdit', 'ges_': 'TextEdit', 'gep_': 'TextEdit', 'chi_fid': 'TextEdit', 'cclp_numbe': 'TextEdit', 'review_sta': 'TextEdit', 'review_del': 'TextEdit', 'geo_fid': 'TextEdit', 'url': 'TextEdit', 'compiler': 'TextEdit', 'compiledon': 'DateTime', 'rowid_pre-': 'TextEdit', 'rowid': 'TextEdit', 'Super_clay': 'TextEdit', 'Bed_chalk': 'TextEdit', });
lyr_CCLPLiDARminimumarea_4.set('fieldImages', {'Id': 'TextEdit', 'Area': 'TextEdit', 'AreaII': 'TextEdit', 'Area_': 'TextEdit', });
lyr_pits_final_2.set('fieldLabels', {'get': 'no label', 'ges': 'no label', 'gep': 'no label', 'get_': 'no label', 'ges_': 'no label', 'gep_': 'no label', 'chi_fid': 'no label', 'cclp_numbe': 'no label', 'review_sta': 'no label', 'review_del': 'no label', 'geo_fid': 'no label', 'url': 'no label', 'compiler': 'inline label - always visible', 'compiledon': 'no label', 'rowid_pre-': 'no label', 'rowid': 'no label', });
lyr_pits_formations_3.set('fieldLabels', {'get': 'no label', 'ges': 'no label', 'gep': 'no label', 'get_': 'no label', 'ges_': 'no label', 'gep_': 'no label', 'chi_fid': 'no label', 'cclp_numbe': 'no label', 'review_sta': 'no label', 'review_del': 'no label', 'geo_fid': 'no label', 'url': 'no label', 'compiler': 'no label', 'compiledon': 'no label', 'rowid_pre-': 'no label', 'rowid': 'no label', 'Super_clay': 'no label', 'Bed_chalk': 'no label', });
lyr_CCLPLiDARminimumarea_4.set('fieldLabels', {'Id': 'inline label - always visible', 'Area': 'inline label - visible with data', 'AreaII': 'no label', 'Area_': 'no label', });
lyr_CCLPLiDARminimumarea_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
const gulp = require('gulp');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');

//**
//
// Custom Modernizr Build
//
//**
const modernizrSettings = {
	"cache" : true,
  "parseFiles": true,
	"options" : [
		"setClasses",
		"addTest",
		"html5printshiv",
		"testProp",
		"fnBind"
	],
	"tests" : [
    'canvastext', 'csstransforms3d', 'flexbox', 'cssgradients', 'opacity', 'indexeddb', 'backgroundsize', 'borderimage', 'borderradius', 'boxshadow', 'cssanimations', 'csscolumns', 'cssreflections', 'csstransitions', 'flexbox-legacy', 'prefixed', 'csstransforms', 'mq', 'hashchange', 'draganddrop', 'generatedcontent', 'svg', 'inlinesvg', 'smil', 'svgclippaths', 'input', 'inputtypes', 'touch', 'fontface', 'testbundle', 'respond', 'websockets', 'a_download', 'audio_audiodata_api', 'audio_webaudio_api', 'battery_api', 'battery_level', 'canvas_todataurl_type', 'contenteditable', 'contextmenu', 'cookies', 'cors', 'css_backgroundcliptext', 'css_backgroundrepeat', 'css_backgroundsizecover', 'css_boxsizing', 'css_cubicbezierrange', 'css_displayrunin', 'css_displaytable', 'css_filters', 'css_hyphens', 'css_mask', 'css_mediaqueries', 'css_overflow_scrolling', 'css_pointerevents', 'css_remunit', 'css_resize', 'css_scrollbars', 'css_shapes', 'css_userselect', 'custom_protocol_handler', 'dataview_api', 'dom_classlist', 'dom_createElement_attrs', 'dom_dataset', 'dom_microdata', 'elem_datalist', 'elem_details', 'elem_output', 'elem_progress_meter', 'elem_ruby', 'elem_time', 'elem_track', 'emoji', 'es5_strictmode', 'event_deviceorientation_motion', 'file_api', 'file_filesystem', 'forms_placeholder', 'forms_speechinput', 'forms_validation', 'fullscreen_api', 'gamepad', 'getusermedia', 'ie8compat', 'img_apng', 'img_webp', 'json', 'lists_reversed', 'localstorage', 'mathml', 'network_connection', 'network_eventsource', 'notification', 'performance', 'quota_management_api', 'requestanimationframe', 'sessionstorage', 'script_async', 'script_defer', 'unicode', 'url_data_uri', 'userdata', 'web_intents', 'webgl_extensions', 'websockets_binary', 'window_framed', 'workers_blobworkers', 'workers_dataworkers', 'workers_sharedworkers', 'blob-constructor', 'css-backgroundcliptext', 'css-backgroundposition-fourvalues', 'css-backgroundposition-xy', 'css-calc', 'css-lastchild', 'css-regions', 'css-subpixelfont', 'network-xhr2', 'style-scoped', 'svg-filters', 'forms-fileinput', 'vibrate', 'vibration', 'contentsecuritypolicy', 'css-objectfit', 'css-positionsticky', 'css-supports', 'css-vhunit', 'css-vmaxunit', 'css-vminunit', 'css-vwunit', 'forms-formattribute', 'iframe-sandbox', 'iframe-seamless', 'iframe-srcdoc', 'pointerlock-api'
  ],
	"excludeTests": ['hidden'],
	"crawl" : false,
	"useBuffers": false,
	"customTests" : []
};

gulp.task('modernizr', () => {
  return gulp.src('./source/**/*')
    .pipe(modernizr(modernizrSettings))
    .pipe(uglify())
    .pipe(gulp.dest("build/assets/js"));
});

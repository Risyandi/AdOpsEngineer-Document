﻿/**
 * ====================================================================================
 */

/* exported initSample */
// if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
// 	CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
// CKEDITOR.config.height = 150;
// CKEDITOR.config.width = 'auto';

// var initSample = ( function() {
// 	var wysiwygareaAvailable = isWysiwygareaAvailable(),
// 		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

// 	return function() {
// 		var editorElement = CKEDITOR.document.getById( 'editor' );

// 		// :(((
// 		if ( isBBCodeBuiltIn ) {
// 			editorElement.setHtml(
// 				'Hello world!\n\n' +
// 				'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
// 			);
// 		}

// 		// Depending on the wysiwygarea plugin availability initialize classic or inline editor.
// 		if ( wysiwygareaAvailable ) {
// 			CKEDITOR.replace( 'editor' );
// 		} else {
// 			editorElement.setAttribute( 'contenteditable', 'true' );
// 			CKEDITOR.inline( 'editor' );

// 			// TODO we can consider displaying some info box that
// 			// without wysiwygarea the classic editor may not work.
// 		}
// 	};

// 	function isWysiwygareaAvailable() {
// 		// If in development mode, then the wysiwygarea must be available.
// 		// Split REV into two strings so builder does not replace it :D.
// 		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
// 			return true;
// 		}
// 		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
// 	}
// } )();

/**
 * ====================================================================================
 */

/** inline editing using ckeditor */
CKEDITOR.disableAutoInline = true;
CKEDITOR.inline('kv_outer_container');

/**
 * ====================================================================================
 */

// CKEDITOR.on('instanceCreated', function (event) {
//     var editor = event.editor, element = editor.element;
//     editor.on('configLoaded', function () {
//         editor.config.removePlugins = 'colorbutton,find,flash,font,' +
//             'forms,iframe,image,newpage,removeformat,' +
//             'smiley,specialchar,stylescombo,templates';

//         editor.config.toolbarGroups = [
//             { name: 'editing', groups: ['basicstyles', 'links'] },
//             { name: 'undo' },
//             { name: 'clipboard', groups: ['selection', 'clipboard'] },
//             { name: 'about' }
//         ];
//     });
// });

/**
 * ====================================================================================
 */
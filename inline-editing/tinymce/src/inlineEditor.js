var inlineEditor = {
    selector: '.text__editor',
    menubar: false,
    inline: true,
    fixed_toolbar_container: "#text__editor",
    toolbar: "undo redo | bold italic | styleselect",
    schema: "html5",
    setup: function (editor) {
        editor.on('blur', function (e) {
            return false
        });
    }
};

tinymce.init(inlineEditor);

/**
* === Technical Notes ===
* init config use external plugin, in this example use external plugin powerpaste
* { external_plugins: {
    'powerpaste': 'http://www.server.com/application/external_plugins/powerpaste/plugin.js'
    },
*  powerpaste_word_import: 'clean',
   powerpaste_html_import: 'clean',
* }
*/

/*
* === Technical Notes ===
* tinymce.init({
*    selector: ".editable",
*    inline: true,
*    fixed_toolbar_container: "#mytoolbar",
*    schema: "html5",
*    toolbar: "undo redo | bold italic | styleselect",
*    menubar: false,
*    setup: function (editor) {
*        editor.on('blur', function (e) {
*            return false
*        });
*    }
* });
* <div id="mytoolbar" class="height:100px;"></div>
* <div class="editable" style="background-color: #bbb;">Some very simple text editing here.</div>
*/
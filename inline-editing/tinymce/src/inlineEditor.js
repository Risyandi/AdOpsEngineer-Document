var emailHeaderConfig = {
    selector: '.tinymce-heading',
    /** extra plugins tinycloud */
    // external_plugins: {
    //     'powerpaste': 'http://www.server.com/application/external_plugins/powerpaste/plugin.js'
    // },
    menubar: false,
    inline: true,
    plugins: [
        'lists',
        'autolink'
    ],
    toolbar: 'undo redo | bold italic underline',
    valid_elements: 'strong,em,span[style],a[href]',
    valid_styles: {
        '*': 'font-size,font-family,color,text-decoration,text-align'
    },
    /** extra plugins tinycloud */
    // paste_word_import: 'clean',
    // paste_html_import: 'clean',
    content_css: [
        'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i'
    ]
};

var emailBodyConfig = {
    selector: '.tinymce-body',
    /** extra plugins tinycloud */
    // external_plugins: {
    //     'powerpaste': 'http://www.server.com/application/external_plugins/powerpaste/plugin.js'
    // },
    menubar: false,
    inline: true,
    plugins: [
        'link',
        'lists',
        'autolink',
    ],
    toolbar: [
        'undo redo | bold italic underline | fontselect fontsizeselect',
        'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
    ],
    valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
    valid_styles: {
        '*': 'font-size,font-family,color,text-decoration,text-align'
    },
    /** extra plugins tinycloud */
    // powerpaste_word_import: 'clean',
    // powerpaste_html_import: 'clean',
    content_css: [
        'https://fonts.googleapis.com/css?fonts.googleapis.com/css?family=Lato:300,300i,400,400i'
    ]
};

tinymce.init(emailHeaderConfig);
tinymce.init(emailBodyConfig);
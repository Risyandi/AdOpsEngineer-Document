/**
 * documentations
 * #1 : selector 
 *      - images = where you appear the ads, by spesific images.
 *      - title = where you appear the ads, by spesific title.
 * #2 : functions 
 *      - onPlaceholderSized = create div placeholder for the ads.
 *      - getSatellitePlaceholder = insert div placeholder.
 *      - onInventoryImpression = create element for count impression.
 * #3 : less than 800, fire id publisher;
 */

(function (w, d, o, u, g) {
w['adbro'] = { publisher: g, config: null }; 
a = d.createElement(o),
    m = d.getElementsByTagName(o)[0]; a.async = 1; a.src = u; m.parentNode.insertBefore(a, m);
})
    (window, document, 'script', '//cdn.adbro.me/adsbyadbro.js', '222c775c-92e2-46f0-a830-8e14bfc981dd');

window.adbro.config = {
    // #1
    selectors: {
        images: '#article-content .picture img',
        title: 'Agung Hercules Meninggal Dunia Setelah Berjuang Melawan Kanker Otak Stadium 4'
    },
    // #2
    functions: {
        onPlaceholderSized: function (div, img) {
            div.style.marginBottom = '-' + img.offsetHeight + 'px';
            div.style.top = '-' + img.offsetHeight + 'px';
            div.style.display = 'block';
        },
        getSatellitePlaceholder: function (div) {
            var satellite = document.createElement('div');
            div.parentNode.insertBefore(satellite, div);
            div.parentNode.insertBefore(div, satellite);
            return satellite;
        },
        onInventoryImpression: function (img, div, data) {
            // Creating element with DFP "Viewed Impression" macro:
            if ('%%VIEW_URL_UNESC%%' === '%%VIEW_URL' + '_UNESC%%') return;
            var pixel = document.createElement('img');
            pixel.style.cssText = 'width:1px;height:1px;display:none;';
            pixel.src = '%%VIEW_URL_UNESC%%';
            div.appendChild(pixel);
        }
    }
};

// #3
if (window.top.innerWidth < 800) {
    window.adbro.publisher = 'b0a3b45e-8ec6-41e4-9a68-2ad17b9ddcdb';
}
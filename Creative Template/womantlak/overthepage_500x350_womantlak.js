document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {

        var overlayStyle = "\
            .area-overlay {\
            position: fixed;\
            display: none;\
            width: 100%;\
            height: 100%;\
            top: 0;\
            left: 0;\
            right: 0;\
            bottom: 0;\
            background-color: rgba(0, 0, 0, 0.50);\
            z-index: 9999999 !important;\
            }\
            .image-ads {\
            width: 500px;\
            height: 350px;\
            position: absolute;\
            top: 50%;\
            left: 50%;\
            transform: translate(-50%,-50%);\
            -ms-transform: translate(-50%,-50%);\
            }\
            .image-ads img {\
                max-width: 100%;\
                max-height: 100%;\
            }\
            .close-overlay img{\
            position: absolute;\
            right: -11px;\
            bottom: 338px;\
            cursor: pointer;\
            }\
            /* effect zoomin for banner */\
            .zoomIn {\
            -webkit-animation-name: zoomIn;\
            animation-name: zoomIn;\
            }\
            \
            .animated {\
            -webkit-animation-duration: 0.3s;\
            animation-duration: 0.3s;\
            -webkit-animation-fill-mode: both;\
            animation-fill-mode: both;\
            }\
            \
            @-webkit-keyframes zoomIn {\
            from {\
                opacity: 0;\
                -webkit-transform: scale3d(0.3, 0.3, 0.3);\
                transform: scale3d(0.3, 0.3, 0.3);\
            }\
            \
            50% {\
                opacity: 1;\
            }\
            }\
            \
            @keyframes zoomIn {\
            from {\
                opacity: 0;\
                -webkit-transform: scale3d(0.3, 0.3, 0.3);\
                transform: scale3d(0.3, 0.3, 0.3);\
            }\
            \
            50% {\
                opacity: 1;\
            }\
            }";

        var overlayElementStyle = parent.document.createElement('style');
        overlayElementStyle.type = 'text/css';
        overlayElementStyle.appendChild(document.createTextNode(overlayStyle));
        parent.document.getElementsByTagName('head')[0].appendChild(overlayElementStyle);

        var overlayTemplate = '\
        <div class="image-ads" id="image-ads">\
            <div class="close-overlay" id="close-overlay" onclick="offOverlay()"><img src="[%ButtonClose%]" alt="close"></div>\
                <a target="_blank" href="%%CLICK_URL_UNESC%%[%LandingPage%]">\
                    <img src="[%FileImage%]" alt="images ads">\
                </a>\
                <img src="%%VIEW_URL_UNESC%%" style="display:none">\
        </div>';

        var overlayElementTemplate = parent.document.createElement('div');
        overlayElementTemplate.innerHTML = overlayTemplate;
        overlayElementTemplate.setAttribute('class', 'area-overlay zoomIn animated');
        overlayElementTemplate.setAttribute('id', 'area-overlay');
        overlayElementTemplate.setAttribute('onClick', 'offOverlay()');
        parent.document.querySelector('div.overlay-desktop').parentNode.insertBefore(overlayElementTemplate, parent.document.querySelector('div.overlay-desktop'));


        var overlayScript = '\
        onOverlay();\
        function onOverlay() {\
        document.getElementById("area-overlay").style.display = "block";\
        console.log("open overlay");\
            setTimeout(function () {\
            document.getElementById("area-overlay").style.display = "none";\
            console.log("auto close overlay");\
        }, 15000);\
        }\
        function offOverlay() {\
        document.getElementById("area-overlay").style.display = "none";\
        console.log("clicked close overlay");}\
        ';

        var overlayElementScript = parent.document.createElement('script');
        overlayElementScript.text = overlayScript;
        parent.document.getElementsByTagName('head')[0].appendChild(overlayElementScript);
        console.log('draw overlay');

    }
})    
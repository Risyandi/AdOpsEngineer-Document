document.addEventListener('readystatechange', function () {
if (document.readyState == 'complete') {

    var bottomFrameStyle = "\
    .area-bottomFrame-mob {\
            width: 100%;\
            bottom: 0px;\
            left: 0px;\
            text-align: center;\
            position: fixed;\
            z-index: 99999;\
            background: #f5f5f5;\
        }\
        .image-bottomFrame-mob {\
            margin: auto;\
            width: 320px;\
            height: 50px;\
        }\
        .close-bottomFrame {\
            position: absolute;\
            right: 0px;\
            bottom: 46px;\
            cursor: pointer;\
        }\
        .close-bottomFrame img {\
            background: #f5f5f5;\
            padding: 6px 6px 6px 6px;\
            border-top-left-radius: 12px;\
            border-top-right-radius: 12px;\
        }\
        .button-close {\
            width: 20px;\
        }\
        .animated {\
            -webkit-animation-duration: 0.2s;\
            animation-duration: 0.2s;\
            -webkit-animation-fill-mode: both;\
            animation-fill-mode: both;\
        }\
        .fadeInUp {\
        -webkit-animation-name: fadeInUp;\
        animation-name: fadeInUp;\
        }\
        @-webkit-keyframes fadeInUp {\
        from {\
            opacity: 0;\
            -webkit-transform: translate3d(0, 100%, 0);\
            transform: translate3d(0, 100%, 0);\
        }\
        to {\
            opacity: 1;\
            -webkit-transform: translate3d(0, 0, 0);\
            transform: translate3d(0, 0, 0);\
        }\
        }\
        @keyframes fadeInUp {\
        from {\
            opacity: 0;\
            -webkit-transform: translate3d(0, 100%, 0);\
            transform: translate3d(0, 100%, 0);\
        }\
        to {\
            opacity: 1;\
            -webkit-transform: translate3d(0, 0, 0);\
            transform: translate3d(0, 0, 0);\
        }\
        }\
    ";

     var bottomFrameElementStyle = parent.document.createElement('style');
        bottomFrameElementStyle.type = 'text/css';
        bottomFrameElementStyle.appendChild(document.createTextNode(bottomFrameStyle));
        parent.document.getElementsByTagName('head')[0].appendChild(bottomFrameElementStyle);


    var bottomFrameTemplate = '\
        <div class="image-bottomFrame-mob" id="image-bottomFrame-mob">\
            <div class="close-bottomFrame" id="close-bottomFrame"  onclick="offBottomFrame()">\
                <img class="button-close" src="[%ButtonClose%]" alt="button-close">\
            </div>\
            <a href="%%CLICK_URL_UNESC%%[%LandingPage%]" target="_blank">\
                <img src="[%FileImage%]" alt="image-bottomFrame">\
            </a>\
            <img src="%%VIEW_URL_UNESC%%" style="display:none">\
        </div>';

   var bottomFrameElementTemplate = parent.document.createElement('div');
   bottomFrameElementTemplate.innerHTML = bottomFrameTemplate;
   bottomFrameElementTemplate.setAttribute('class', 'area-bottomFrame-mob fadeInUp animated');
   bottomFrameElementTemplate.setAttribute('id', 'area-bottomFrame-mob');
   parent.document.querySelector('div#nativeAds').parentNode.insertBefore(bottomFrameElementTemplate, parent.document.querySelector('div#nativeAds'));

    var bottomFrameScript = '\
    function offBottomFrame() {\
       document.getElementById("area-bottomFrame-mob").style.display = "none";\
    }';

    var bottomFrameElementScript = parent.document.createElement('script');
    bottomFrameElementScript.text = bottomFrameScript;
    parent.document.getElementsByTagName('head')[0].appendChild(bottomFrameElementScript);
    console.log('draw overlay mobile');

}
})
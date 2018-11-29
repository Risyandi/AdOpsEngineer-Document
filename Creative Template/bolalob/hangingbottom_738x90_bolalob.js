document.addEventListener('readystatechange', function () {
if (document.readyState == 'complete') {

var bottomFrameDeskStyle = "\
    .area-bottomFrame-desk {\
        width: 100%;\
        bottom: 0px;\
        left: 0px;\
        text-align: center;\
        position: fixed;\
        z-index: 99999;\
    }\
    .image-bottomFrame-desk {\
        margin: auto;\
        width: 738px;\
        height: 90px;\
    }\
    .close-bottomFrame-desk {\
        position: absolute;\
        bottom: 86px;\
        cursor: pointer;\
        margin: auto;\
    }\
    .close-bottomFrame-desk img {\
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
    }";

    var bottomFrameDeskElementStyle = parent.document.createElement('style');
    bottomFrameDeskElementStyle.type = 'text/css';
    bottomFrameDeskElementStyle.appendChild(document.createTextNode(bottomFrameDeskStyle));
    parent.document.getElementsByTagName('head')[0].appendChild(bottomFrameDeskElementStyle);

    var bottomFrameDeskTemplate = '\
        <div class="image-bottomFrame-desk" id="image-bottomFrame-desk">\
            <div class="close-bottomFrame-desk" id="close-bottomFrame-desk"  onclick="offBottomFrame()">\
                <img class="button-close" src="[%ButtonClose%]" alt="button-close">\
            </div>\
            <a href="%%CLICK_URL_UNESC%%[%LandingPage%]" target="_blank">\
                <img src="[%FileImage%]" alt="image-bottomFrame">\
            </a>\
            <img src="%%VIEW_URL_UNESC%%" style="display:none">\
        </div>';

   var bottomFrameDeskElementTemplate = parent.document.createElement('div');
   bottomFrameDeskElementTemplate.innerHTML = bottomFrameDeskTemplate;
   bottomFrameDeskElementTemplate.setAttribute('class', 'area-bottomFrame-desk fadeInUp animated');
   bottomFrameDeskElementTemplate.setAttribute('id', 'area-bottomFrame-desk');
   parent.document.querySelector('div#bottom-frame').parentNode.insertBefore(bottomFrameDeskElementTemplate, parent.document.querySelector('div#bottom-frame'));

    var bottomFrameDeskScript = '\
    function offBottomFrame() {\
       document.getElementById("area-bottomFrame-desk").style.display = "none";\
    }';

    var bottomFrameDeskElementScript = parent.document.createElement('script');
    bottomFrameDeskElementScript.text = bottomFrameDeskScript;
    parent.document.getElementsByTagName('head')[0].appendChild(bottomFrameDeskElementScript);
    console.log('draw overlay desktop');
    
}
})
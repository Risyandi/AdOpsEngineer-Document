var parallaxStyle = "\
    .title-ads{\
        color: #fff;\
    text-transform: uppercase;\
    font: normal 9px arial;\
    left: 0px;\
    margin: 0px;\
    width: 100%;\
    height: 18px;\
    line-height: 20px;\
    background: #696868;\
    letter-spacing: 1.01px;\
        text-align: center;\
        position: relative;\
        top: 97%;\
    }\
    .landing-page {\
    cursor: pointer;\
    }\
    .main-parallax {\
    background-image: url('[%FileImage%]');\
    background-repeat: no-repeat;\
    background-size: cover;\
    background-attachment: fixed;\
    padding: 0rem;\
    }\
    #main-parallax{\
    position: fixed;\
    display: block;\
    top: 0;\
    left: 0;\
    width: 100%;\
    height: 100% !important;\
    transform: translateZ(0);\
    will-change: transform;\
    z-index: 1;\
    background-attachment: scroll !important;\
    }\
    .parallax-section {\
    position: relative;\
    width: 100%;\
    height: 500px;\
    }\
    .parallax-child-section {\
    clip: rect(0,auto,auto,0);\
    position: absolute;\
    top: 0;\
    left: 0;\
    width: 100%;\
    height: 500px;\
    }\
    ";

var parallaxElementStyle = parent.document.createElement('style');
parallaxElementStyle.type = 'text/css';
parallaxElementStyle.appendChild(document.createTextNode(parallaxStyle));
parent.document.getElementsByTagName('head')[0].appendChild(parallaxElementStyle);

var parallaxTemplate = '\
  <div class="title-ads">Advertisement</div>\
  <div class="parallax-section">\
    <div class="parallax-child-section">\
      <a href="%%CLICK_URL_UNESC%%[%LandingPage%]" class="landing-page" target="_blank">\
        <section class="main-parallax" id="main-parallax"></section>\
        <img src="%%VIEW_URL_UNESC%%" style="display:none">\
      </a>\
    </div>\
  </div>\
  <div class="title-ads">Advertisement</div>\
';

var parallaxElementTemplate = parent.document.createElement('div');
parallaxElementTemplate.innerHTML = parallaxTemplate;
parallaxElementTemplate.setAttribute('class', 'parallaxAds');
parallaxElementTemplate.setAttribute('id', 'parallaxAds');
parent.document.querySelector('div.parallax-mobile').parentNode.insertBefore(parallaxElementTemplate, parent.document.querySelector('div.parallax-mobile'));
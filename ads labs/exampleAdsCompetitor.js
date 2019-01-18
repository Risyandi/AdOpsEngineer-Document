
    var otp_type = 'OTP';
    if(otp_type=='Interstitial'){
        otp_width = '320';
        otp_height = '480'; 
    } else if(otp_type=='Super OTP'){
        otp_width = '250';
        otp_height = '350'; 
    } else {
        otp_width = '250';
        otp_height = '250'; 
    }

    document.addEventListener('readystatechange', function () {
        if (document.readyState == 'complete') {
            var interstitial_style="\
                #otpm_close {\
                    display:inline-block;\
                    width:43px;\
                    height:43px;\
                    position:absolute;\
                    top:-19px;\
                    background: url(https://preview-kmkonline.akamaized.net/banners/images/close-btn2.png) no-repeat center;\
                    margin-left:98px;\
                    right: calc(((100vw - "+ otp_width +"px) / 2 ) - (43px / 2));\
                    float : right;\
                }\
                #otpm{\
                    width:100%; \
                    position:fixed; \
                    z-index:1000; \
                    top:100px;\
                    top:calc(("+parent.window.innerHeight+"px - "+ otp_height +"px)/ 2);\
                }\
                #otpm_bg{\
                    width: 100%;\
                    height: 100%;\
                    display: block;\
                    background-color: #000;\
                    position: fixed;\
                    top: 0;\
                    z-index: 100;\
                    opacity: 0.5;\
                }\
                .channel-ad_ad-otp img {\
                    max-height: "+ otp_height +"px !important;\
                }";

                var tweakStyle = "\
                    @media only screen and (max-width: 320px) {\
                        img#Interstitial {\
                            width: calc((320px / 100) * 80);\
                        }\
                        \
                        #otpm {\
                            width: 80%;\
                            margin: 0 10%;\
                            top: calc(((100vh - ((320px / 100 * 80) / 8) * 12 ) / 2));\
                        }\
                    }";
            
            if (otp_type=='Interstitial') {
                interstitial_style += tweakStyle;
            }

            var otp_style = parent.document.createElement('style');
            otp_style.type = 'text/css';
            if (otp_style.styleSheet){
                otp_style.styleSheet.cssText = interstitial_style;
            } else {
                otp_style.appendChild(document.createTextNode(interstitial_style));
            }
            parent.document.getElementsByTagName('head')[0].appendChild(otp_style);
            
            var interstitial_template='\
                    <div id="otpm_bg"></div>\
                    <div id="otpm">\
                        <div id="otpm_close"></div>\
                        <div style="width:100%; height:'+ otp_height +'px">\
                            <a href="https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjss9K7XYNiFMxNYTgkJwmsVHjSjWxhwBuxFq3GzrY5D_e8u7fIVrV26yTCYYUGKMD_LqzhrQsLsdgz21HHc2mMjD5i5sjAatFstIsAGJTfsTit80KimMwVYP0vXuUklGIb6vZXqFzmhZTgoP4Yq6-sdw9zCeQoIl8_Gj2q9zkPQXUkUs9wD5n1m0RUmnGULGoL5Ad0QW5MhpTuAiy2Cj_XheZApp7optpZllJwOV1-A1ygqxp2WqFnCpD_8Gm6Cmi1t_Ev2XncdhsNLqij3UroQ&sig=Cg0ArKJSzGEpjOcQqXGjEAE&urlfix=1&adurl=https://www.blibli.com/promosi/kebaikan-ramadhan?utm_source=xaxisliputan6showbizmobilesitetakeover&utm_medium=premiumplacement&utm_campaign=ramadhan" target="_blank">\
                                <img id="OTP" src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCbpNmO-QEQARgBMgiDpFZMv4Co4Q">\
                            </a>\
                        </div>\
                    </div>';
            var otp_template = parent.document.createElement('center');
            otp_template.innerHTML = interstitial_template;
            otp_template.setAttribute('data-info', 'ad');
            //parent.document.insertBefore(otp_template, parent.document.getElementsByClassName("layout__ads")[0]);
            parent.document.querySelector('div.layout__ads').parentNode.insertBefore(otp_template, parent.document.querySelector('div.layout__ads'));
           
            var interstitial_script='\
                disableScroll(true);\
                otpmTimeState = true;\
                document.getElementById("otpm_bg").addEventListener("click", function(){\
                    document.getElementById("otpm").style.display = "none";\
                    document.getElementById("otpm_bg").style.display = "none";\
                    otpmTimeState = false;\
                    disableScroll(false);\
                });\
                document.getElementById("otpm_close").addEventListener("click", function(){\
                    document.getElementById("otpm").style.display = "none";\
                    document.getElementById("otpm_bg").style.display = "none";\
                    otpmTimeState = false;\
                    disableScroll(false);\
                });\
                setTimeout(function () {\
                    document.getElementById("otpm").style.display = "none";\
                    document.getElementById("otpm_bg").style.display = "none";\
                    otpmTimeState = false;\
                    disableScroll(false);\
                },30 * 1000);\
                \
                window.addEventListener("orientationchange", function(){\
                    if (otpmTimeState) {\
                        if(window.orientation == 90 || window.orientation == -90){\
                            disableScroll(false);\
                            document.getElementById("otpm").style.display = "none";\
                            document.getElementById("otpm_bg").style.display = "none";\
                        }else{\
                            disableScroll(true);\
                            document.getElementById("otpm").style.display = "block";\
                            document.getElementById("otpm_bg").style.display = "block";\
                        }\
                    }\
                });\
                \
                var scrollTop=0;\
                function disableScroll(disable){\
                    if(disable){\
                        scrollTop = document.scrollingElement.scrollTop || document.documentElement.scrollTop;\
                        document.body.style.top=\"-\"+scrollTop+\"px\";\
                        document.documentElement.style.overflow=\"hidden\";\
                        document.documentElement.style.height=\"100%\";\
                        document.documentElement.style.position=\"fixed\";\
                        document.documentElement.style.width=\"100%\";\
                        document.body.style.position=\"fixed\";\
                        document.body.style.width=\"100%\";\
                        canScroll = false;\
                    }else{\
                        document.documentElement.style.overflow=\"\";\
                        document.documentElement.style.height=\"auto\";\
                        document.documentElement.style.position=\"static\";\
                        document.body.style.position=\"static\";\
                        document.body.style.top=\"\";\
                        canScroll = true;\
                    }\
                }\
               function dfp_setCookie(e, n, t, i) {\
                     n = escape(n);\
                     var o = extractDomain();\
                     document.cookie = e + "=" + n + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;Domain=" + o;\
               }\
               function extractDomain() {\
                     var e, n = window.location.href;\
                     return e = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0], e = e.split(":")[0];\
                }\
                if (!false) {dfp_setCookie("dfp_exclude_capping", "1", "/", "");}\
            ';
            var otp_script = parent.document.createElement('script');
            otp_script.text= interstitial_script;
            parent.document.getElementsByTagName('head')[0].appendChild(otp_script);
            console.log("Inititiate OTP Image v0.3");

        }
    })


    

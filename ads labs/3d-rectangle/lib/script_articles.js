var swipeContainer = document.getElementById('swipeContainer');

initSwiper();
// trimDescription();

function initSwiper() {
    var framesAmount = document.getElementsByClassName('swiper-slide').length - 1;
    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        loop: true,
        speed: 990,
        cube: {
            shadow: false,
            slideShadows: false
        },
        autoplay: '2',
        autoplayStopOnLast: true,
        onAutoplayStop(swiper) {
            for (i = 0; i < framesAmount; i++) {
                swiper.slidePrev();
            };
            setTimeout(function () {
                swiper.destroy(true, true);
                swiper = new Swiper('.swiper-container', {
                    effect: 'cube',
                    loop: true,
                    speed: 200,
                    cube: {
                        shadow: false,
                        slideShadows: false
                    },
                    init: true,
                    preventClicks: false,
                    onTouchStart(swiper, event) {
                        var instr = document.getElementById('swipeInstructions');
                        setTimeout(function () {
                            instr.style.opacity = "0";
                            setTimeout(function () {
                                instr.style.display = "none";
                            }, 1000);
                        }, 500);
                    },
                    on: {
                        init: function () {
                        },
                    },
                });
            }, 500);
        }
    });
}

// function trimDescription(){
//     let valueDesc = document.querySelectorAll('.description');
//     let textDesc = valueDesc;
//     let lengthDesc = 11;
//         console.log(textDesc, ": result textDesc");
//     let trimmedDesc = textDesc.substring(0, lengthDesc);
//     console.log(trimmedDesc, ": result trimmed");
// }
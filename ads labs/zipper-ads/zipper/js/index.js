// convert screen coords to svg coords
function coordinateTransform(screenPoint, svgObject) {
  var CTM = svgObject.getScreenCTM();
  return screenPoint.matrixTransform(CTM.inverse());
}

$(function() {
  
  var mDown = false;
    console.log(mDown, "cek mDown");
  
  var svg = document.getElementById("zipper");
    console.log(svg, "get area id svg");
  
  var pt = svg.createSVGPoint();
    console.log(pt, "cek position svg point");

  var sTop = 0;
    console.log(sTop, "cek sTop");
    
  var sOffset = 0;
    console.log(sOffset, "cek sOffset");
    
  var slider = document.getElementById("slider");
    console.log(slider, "get area id slider");
    
  $("#slider").mousedown(function(e) {
    mDown = true;
    // ClientX is get the horizontal coordinate
    // ClientY is get the vertical coordinate
    sOffset = e.clientY + sTop;
    // console.log(sOffset, "cek sOffset value");
    // console.log("mouse down");
  });

  $("#slider").mouseup(function() {
    mDown = false;
    console.log("mouse up");
  });

  $("#slider").mousemove(function(e) {
    console.log(mDown, "cek val mDown");
    if (mDown) {
      sTop = Math.min(
       Math.max(e.clientY - sOffset, 0),
       $("#zipper").height() - $("#slider")[0].getBoundingClientRect().height
      );

      var cekH = $("#zipper").height();
      console.log(cekH, "cek height");

      var cekSlider = $("#slider")[0].getBoundingClientRect().height;
      console.log(cekSlider, "cekSlider");

      console.log(sTop, "result sTop after Math.min");
      
      pt.y = sTop;

      var y = coordinateTransform(pt, svg).y;

      $("#gear-left").css({
        transform: "translateY(" + y + "px) rotate(" + -y / 10 + "deg)"
      });
      $("#slider").css({ transform: "translateY(" + y + "px)" });
      $("#gear-clip").attr("height", y + 50);
      $("#teeth-clip").attr("y", y + 40);
    }
  });


  // document.getElementById("slider").addEventListener(
  //   "touchstart",
  //   function(e) {
  //     mDown = true;
  //     console.log("touch");
      
  //     e.preventDefault();
  //     var touches = e.changedTouches;
  //     sOffset = touches[0].clientY - sTop;
  //   },
  //   false
  // );


  // document.addEventListener(
  //   "touchend",
  //   function(e) {
  //     e.preventDefault();
  //     mDown = false;
  //   },
  //   false
  // );

  
  // document.addEventListener(
  //   "touchmove",
  //   function(e) {
  //     if (mDown) {
  //       e.preventDefault();
  //       var touches = e.changedTouches;
  //       sTop = Math.min(
  //         Math.max(touches[0].clientY - sOffset, 0),
  //         $("#zipper").height() - $("#slider")[0].getBoundingClientRect().height
  //       );
  //       pt.y = sTop;

  //       var y = coordinateTransform(pt, svg).y;

  //       $("#gear-left").css({
  //         transform: "translateY(" + y + "px) rotate(" + -y / 10 + "deg)"
  //       });
  //       $("#slider").css({ transform: "translateY(" + y + "px)" });
  //       $("#gear-clip").attr("height", y + 50);
  //       $("#teeth-clip").attr("y", y + 40);
  //     }
  //   },
  //   false
  // );

});
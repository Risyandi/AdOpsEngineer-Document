var fixedBackground = document.getElementById('fixedBackground');
var section = document.getElementsByClassName('section');
var sectionGap = document.getElementsByClassName('addPadding');
var heightWindows = window.innerHeight;
console.log(heightWindows, "windows height");

fixedBackground.style.height = heightWindows+"px"; 
var test = fixedBackground.style.height = heightWindows+"px";
console.log(test, "testing1");

for (var i = 0; i < section.length; i++) {
  section[i].style.height =  heightWindows+"px";
  var test2 = section[i].style.height =  heightWindows+"px";
  console.log(test2, "testing2");
}	

for (var i = 0; i < sectionGap.length; i++) {
	sectionGap[i].style.marginBottom =  heightWindows+"px";
  var test3 = 	sectionGap[i].style.marginBottom =  heightWindows+"px";
  console.log(test3, "testing3");
}
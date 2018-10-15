
(function functionName() {
   var scrollY = function () {
     var supportPageOffset = window.pageXOffset !== undefined;
 var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

 return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

   /*
  iniciation de la function scroll

   */

    var onScroll = function() {
      var element = document.querySelector('#nav')
        var rect =  element.getBoundingClientRect()
      var top = rect.top + scrollY()
      var width = rect.width

        if (scrollY() > 550) {
          element.classList.add('fixed')
          element.style.width = width + "px"

        }else {
          element.classList.remove('fixed')
        }
   }
   window.addEventListener('scroll',onScroll)
})()

/* type*/

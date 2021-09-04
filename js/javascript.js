// Powered | CoderX ©2021 | Andrei Abd
// █▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
// █▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
// CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
// mail      :  usr.g0a1@gmial.com
// CoderX    :  https://coderx-project.blogspot.com/
// Whatsapp  :  +963934820511
// Pinterest :  https://www.pinterest.com/andreiabd93
// Instagram :  https://www.instagram.com/andrei_abd/
// Linkeden  :  https://www.linkedin.com/in/andreiabd
// Facebook  :  https://www.facebook.com/andreiaabd/

var 
btnMainPage = document.getElementById("btnmain-main"),
btnNaveReport = document.getElementById("btn-nave-report"),
btnNaveSites = document.getElementById("btn-nave-sites"),
btnNaveAboutSite = document.getElementById("btn-nave-aboutsite"),
btnGoshowarticlles = document.getElementById("article-show-onclick-main-page"),
btnarticleshow1 = document.getElementById("btntexutre-main-page-1"),
btnarticleshow2 = document.getElementById("btntexutre-main-page-2"),
btnarticleshow3 = document.getElementById("btntexutre-main-page-3"),
btnShowArticle1 = document.getElementById("btnarticle-1"), 
btnShowArticle2 = document.getElementById("btnarticle-2"), 
btnShowArticle3 = document.getElementById("btnarticle-3"), 
btnShowArticle4 = document.getElementById("btnarticle-4"), 
btnShowArticle5 = document.getElementById("btnarticle-5"), 
btnShowArticle6 = document.getElementById("btnarticle-6"),
btnCloseArticle1 = document.getElementById("btnarticle1-close"),
btnCloseArticle2 = document.getElementById("btnarticle2-close"),
btnCloseArticle3 = document.getElementById("btnarticle3-close"),
btnCloseArticle4 = document.getElementById("btnarticle4-close"),
btnCloseArticle5 = document.getElementById("btnarticle5-close"),
btnCloseArticle6 = document.getElementById("btnarticle6-close"),
btnDrawingPaint = document.getElementById("btn-paintig-and-drawing"),
btnContentsDrawingPainting = document.getElementById("btn-contents-paint"),
btnNaveBarPlsticArt = document.getElementById("btn-nave-plastict-art"),
btnPrintmaking = document.getElementById("btn-printmaking"),
btnPrintmakinContent = document.getElementById("btn-contents-printmaking"),
btnCarving = document.getElementById("btn-carving"),
btnContentCarving = document.getElementById("btn-contents-carving"),
btnColorBooks = document.getElementById("btn-nave-color-art"),
btnContentColor = document.getElementById("btn-contents-color"),
btnAnatomyArt = document.getElementById("btn-nave-anatomy-art"),
btnContentAnatomy = document.getElementById("btn-contents-anatomy"),
btnPrespective = document.getElementById("btn-nave-prespective-art"),
btmContentPrespective = document.getElementById("btn-contents-prespective"),
btnDesign = document.getElementById("btn-nave-design-art"),
btmContentDesign = document.getElementById("btn-contents-design"),
btnEducation = document.getElementById("btn-nave-education-art"),
btnContentEducation = document.getElementById("btn-contents-education"),
btnCriticism = document.getElementById("btn-nave-criticism-art"),
btnContentCriticism = document.getElementById("btn-contents-criticism");

btnMainPage.onclick = ()=> {

var x = document.getElementById("main-page-in-main");
if (x.style.display == "none"){
  x.style.display = "block";
} else {
  x.style.display = "none";
}
};

btnNaveAboutSite.onclick = ()=>{
var y = document.getElementById("nvae-texture1");
var yy = document.getElementById("nvae-texture2");
var yyy = document.getElementById("nvae-texture3");
if (y.style.display == "none"){
  y.style.display = "block";
  yy.style.display = "none";
  yyy.style.display = "none";
} else {
  y.style.display = "none";
}
};

btnNaveSites.onclick = ()=>{
var a = document.getElementById("nvae-texture2");
var aa = document.getElementById("nvae-texture1");
var aaa = document.getElementById("nvae-texture3");
if (a.style.display == "none"){
  a.style.display = "block";
  aa.style.display = "none";
  aaa.style.display = "none";
} else {
  a.style.display = "none";
}
};

btnNaveReport.onclick = ()=>{
var c = document.getElementById("nvae-texture3");
var cc = document.getElementById("nvae-texture2");
var ccc = document.getElementById("nvae-texture1");
if (c.style.display == "none"){
  c.style.display = "block";
  cc.style.display = "none";
  ccc.style.display = "none";
} else {
  c.style.display = "none";
}
};

btnGoshowarticlles.onclick = ()=>{
var d = document.getElementById("articles-show-all-main-list");
if (d.style.display == "none"){
  d.style.display = "block";
} else {
  d.style.display = "none";
}
};

btnarticleshow1.onclick = ()=>{
var f = document.getElementById("texutre-main-page-1");
var ff = document.getElementById("texutre-main-page-1-all");
if (f.style.display == "block"){
  f.style.display = "none";
  btnarticleshow1.style.display = "none";
  ff.style.display = "block";
} else {
  // nothing else
}
};

btnarticleshow2.onclick = ()=>{
var e = document.getElementById("texutre-main-page-2");
var ee = document.getElementById("texutre-main-page-2-all");
if (e.style.display == "block"){
  e.style.display = "none";
  ee.style.display = "block";
  btnarticleshow2.style.display = "none";
} else {
  // nothing else
}
};

btnarticleshow3.onclick = ()=>{
var q = document.getElementById("texutre-main-page-3");
var qq = document.getElementById("texutre-main-page-3-all");
if (q.style.display == "block"){
  q.style.display = "none";
  qq.style.display = "block";
  btnarticleshow3.style.display = "none";
} else {
  // nothing else
}
};

btnShowArticle1.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-1");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
}
};

btnShowArticle2.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-2");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
 }
};

btnShowArticle3.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-3");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
 }
};

btnShowArticle4.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-4");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
 }
};

btnShowArticle5.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-5");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
 }
};

btnShowArticle6.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-6");
if (x.style.display == "none"){
  x.style.display = "block";
  xx.style.display = "block";
} else {
  x.style.display = "none";
  xx.style.display = "none";
 }
};

btnCloseArticle1.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-1");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

btnCloseArticle2.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-2");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

btnCloseArticle3.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-3");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

btnCloseArticle4.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-4");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

btnCloseArticle5.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-5");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

btnCloseArticle6.onclick = ()=>{
var x = document.getElementById("showallarticle-afterclick");
var xx = document.getElementById("articleshow-6");
if (x.style.display == "block"){
  x.style.display = "none";
  xx.style.display = "none";
} else {
  // nothing else
 }
};

//back to top button

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
  if(!backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnExit");
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display = "block";
  }
  }
  else { // Hide backToTopButton
  if(backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function() {
    backToTopButton.style.display = "none";
    }, 250);
  }
  }
};

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
  if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

btnDrawingPaint.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-drawing-painting");
  var xx = document.getElementById("plastic-art-books-printmaking");
  var xxx = document.getElementById("plastic-art-books-carving");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentsDrawingPainting.onclick = ()=>{
  var x = document.getElementById("content-drawing-and-painting");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnNaveBarPlsticArt.onclick = ()=>{
  var x = document.getElementById("books-of-plastic-arts");
  var xx = document.getElementById("plastic-art-books-color");
  var xxx = document.getElementById("plastic-art-books-design");
  var xxxx = document.getElementById("plastic-art-books-prespective");
  var xxxxx = document.getElementById("plastic-art-books-anatomy");
  var xxxxxx = document.getElementById("plastic-art-books-color");
  var xxxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
    xxxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnPrintmaking.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-printmaking");
  var xx = document.getElementById("plastic-art-books-drawing-painting");
  var xxx = document.getElementById("plastic-art-books-carving");
  var xxxx = document.getElementById("plastic-art-books-anatomy");
  var xxxxx = document.getElementById("plastic-art-books-prespective");
  var xxxxxx = document.getElementById("plastic-art-books-design");
  var xxxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
    xxxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnPrintmakinContent.onclick = ()=>{
  var x = document.getElementById("content-printmaking");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnCarving.onclick = ()=> {
  var x = document.getElementById("plastic-art-books-carving");
  var xx = document.getElementById("plastic-art-books-printmaking");
  var xxx = document.getElementById("plastic-art-books-drawing-painting");
  var xxxx= document.getElementById("plastic-art-books-anatomy");
  var xxxxx = document.getElementById("plastic-art-books-design");
  var xxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentCarving.onclick = ()=>{
  var x = document.getElementById("content-carving");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnColorBooks.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-color");
  var xx = document.getElementById("books-of-plastic-arts");
  var xxx= document.getElementById("plastic-art-books-anatomy");
  var xxxx = document.getElementById("plastic-art-books-prespective");
  var xxxxx = document.getElementById("plastic-art-books-design");
  var xxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentColor.onclick = ()=>{
  var x = document.getElementById("content-color");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnAnatomyArt.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-anatomy");
  var xx = document.getElementById("plastic-art-books-color");
  var xxx = document.getElementById("books-of-plastic-arts");
  var xxxx = document.getElementById("plastic-art-books-prespective");
  var xxxxx = document.getElementById("plastic-art-books-design");
  var xxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentAnatomy.onclick = ()=>{
  var x = document.getElementById("content-anatomy");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnPrespective.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-prespective");
  var xx = document.getElementById("plastic-art-books-anatomy");
  var xxx = document.getElementById("plastic-art-books-color");
  var xxxx = document.getElementById("books-of-plastic-arts");
  var xxxxx = document.getElementById("plastic-art-books-design");
  var xxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btmContentPrespective.onclick = ()=>{
  var x = document.getElementById("content-prespective");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnDesign.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-design");
  var xx = document.getElementById("plastic-art-books-prespective");
  var xxx = document.getElementById("plastic-art-books-anatomy");
  var xxxx = document.getElementById("plastic-art-books-color");
  var xxxxx = document.getElementById("books-of-plastic-arts");
  var xxxxxx = document.getElementById("plastic-art-books-education");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btmContentDesign.onclick = ()=>{
  var x = document.getElementById("content-design");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnEducation.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-education");
  var xx = document.getElementById("plastic-art-books-design");
  var xxx = document.getElementById("plastic-art-books-prespective");
  var xxxx = document.getElementById("plastic-art-books-anatomy");
  var xxxxx = document.getElementById("plastic-art-books-color");
  var xxxxxx = document.getElementById("books-of-plastic-arts");
  var xxxxxxx = document.getElementById("plastic-art-books-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentEducation.onclick = ()=>{
  var x = document.getElementById("content-education");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

btnCriticism.onclick = ()=>{
  var x = document.getElementById("plastic-art-books-criticism");
  var xx = document.getElementById("plastic-art-books-education");
  var xxx = document.getElementById("plastic-art-books-design");
  var xxxx = document.getElementById("plastic-art-books-prespective");
  var xxxxx = document.getElementById("plastic-art-books-anatomy");
  var xxxxxx = document.getElementById("plastic-art-books-color");
  var xxxxxxx = document.getElementById("books-of-plastic-arts");
  if (x.style.display == "none"){
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
    xxxx.style.display = "none";
    xxxxx.style.display = "none";
    xxxxxx.style.display = "none";
    xxxxxxx.style.display = "none";
  } else {
    x.style.display = "none";
  }
};

btnContentCriticism.onclick = ()=>{
  var x = document.getElementById("content-criticism");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// $('#btn-nave-aboutsite').click(function() {
//   $('#btn-nave-aboutsite').html('<span class="mb-2 spinner-border spinner-border-sm mr-4" role="status" aria-hidden="true"></span>جاري الطلب').attr('disabled', true);
// });

function CustomAlert() { // About and Contact, Box Alert. 
  this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById("dialogoverlay");
      var dialogbox = document.getElementById("dialogbox");
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH +"px";
      dialogbox.style.left = (winW/2) - (250 * .5)+"px";
      dialogbox.style.top = "50px";
      dialogbox.style.display = "block";
      document.getElementById("dialogboxbody").innerHTML = dialog;
      document.getElementById("dialogboxfooter").innerHTML = '<button style="margin: 10px;border-radius: 5px;border: 1px solid black;color: #000;" onclick="Alert.ok()">حسناً</i></button>';
  }
  this.ok = function(){
      document.getElementById("dialogbox").style.display = "none";
      document.getElementById("dialogoverlay").style.display = "none";
  }
};
var Alert = new CustomAlert();

onload = ()=>{
  Alert.render('<img src="gif/00-footer.gif" width="40%" alt=""><br><p dir="rtl"><strong>مرحباً بك في مكتبة الفنون التشكيلية!</strong></p><p dir="rtl">المكتبة الإلكترونية المخصصة لأبحاث و مقالات الفنون التشكيلية بصفة عامة</p><strong><p>لا تنسى متابعة صفحة الموقع على <a href="https://www.facebook.com/fineartlibrarybooks/" target="blank">الفيس بوك</a></p></strong>');
}
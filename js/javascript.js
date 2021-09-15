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
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
  document.getElementById("main").style.marginLeft = "280px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function openContentArtDrawing() {
  if (document.getElementById("content-drawing-and-painting").style.display == "none"){
    document.getElementById("content-drawing-and-painting").style.display = "block";
  } else {
    document.getElementById("content-drawing-and-painting").style.display = "none";
  }
}
function openContentPrintMaking() {
  if (document.getElementById("content-printmaking").style.display == "none"){
    document.getElementById("content-printmaking").style.display = "block";
  } else {
    document.getElementById("content-printmaking").style.display = "none";
  }
}
function openContentCarving() {
  if (document.getElementById("content-carving").style.display == "none"){
    document.getElementById("content-carving").style.display = "block";
  } else {
    document.getElementById("content-carving").style.display = "none";
  }
}
function openContentColor() {
  if (document.getElementById("content-color").style.display == "none"){
    document.getElementById("content-color").style.display = "block";
  } else {
    document.getElementById("content-color").style.display = "none";
  }
}
function openContentPrespective() {
  if (document.getElementById("content-prespective").style.display == "none"){
    document.getElementById("content-prespective").style.display = "block";
  } else {
    document.getElementById("content-prespective").style.display = "none";
  }
}
function openContentAnatomy() {
  if (document.getElementById("content-anatomy").style.display == "none"){
    document.getElementById("content-anatomy").style.display = "block";
  } else {
    document.getElementById("content-anatomy").style.display = "none";
  }
}
function openContentDesign() {
  if (document.getElementById("content-design").style.display == "none"){
    document.getElementById("content-design").style.display = "block";
  } else {
    document.getElementById("content-design").style.display = "none";
  }
}
function openCriticism() {
  if (document.getElementById("content-criticism").style.display == "none"){
    document.getElementById("content-criticism").style.display = "block";
  } else {
    document.getElementById("content-criticism").style.display = "none";
  }
}
function openContentEducation() {
  if (document.getElementById("content-education").style.display == "none"){
    document.getElementById("content-education").style.display = "block";
  } else {
    document.getElementById("content-education").style.display = "none";
  }
}

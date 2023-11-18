document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
};

subpanel = document.getElementById("sidenav");
function hide_sidenav(){
  if (subpanel.hidden == false){
      subpanel.hidden = true;
  }else{
      subpanel.hidden = false;
  }
};

icons = document.getElementById("icbuttons");
barswtch = document.getElementById("barswitch");
iconswtch = document.getElementById("iconswitch");

function sidebar() {
  icons.style.display="grid";
  icons.style.position="fixed";
  icons.style.alignItems="center";
  icons.style.justifyItems="center";
  icons.style.right="0";
  icons.style.left="";
  localStorage.setItem("bar", "side");
  localStorage.setItem("icon", "off");
};

function topbar() {
  icons.style.display="flex";
  icons.style.alignItems="left";
  icons.style.justifyItems="left";
  icons.style.right="";
  icons.style.left="0";
  localStorage.setItem("bar", "top");
  localStorage.setItem("icon", "on");
  
};

function bartoggle() {
  if (localStorage.getItem("bar") == 'side'){
    topbar();
  }else{
    sidebar();
  }
};

function setuserbar() {
  if (localStorage.getItem("bar") == 'side'){
    sidebar();
  }else{
    topbar();
  }
};

function setbartoggleicon() {
  if (localStorage.getItem("icon") == 'off'){
    barswtch.classList.add("fa-toggle-off");
    barswtch.classList.remove("fa-toggle-on");
  }else{
    barswtch.classList.add("fa-toggle-on");
    barswtch.classList.remove("fa-toggle-off");
  }
};

function closesettings() {
    subpanel.hidden = true;
};

function cloakon() {
    changeFavicon('./images/favicon/drive.png');
    document.title = "My Drive - Google Drive";
     localStorage.setItem("cloak", "on");
};

function cloakoff() {
     changeFavicon('../favicon.ico');
     document.title = "Andromeda";
     localStorage.setItem("cloak", "off");
};

function cloaktoggle() {
  if (localStorage.getItem("cloak") == 'off'){
    cloakon();
  }else{
    cloakoff();
  }
};

function setusercloak() {
  if (localStorage.getItem("cloak") == 'on'){
    cloakon();
  }else{
    cloakoff();
  }
};
    
function setcloaktoggleicon() {
  if (localStorage.getItem("cloak") == 'off'){
    iconswtch.classList.add("fa-toggle-off");
    iconswtch.classList.remove("fa-toggle-on");
  }else{
    iconswtch.classList.add("fa-toggle-on");
    iconswtch.classList.remove("fa-toggle-off");
  }
};

var proxyStored = localStorage.getItem("theme")
var proxySel = document.getElementById("themeSwitcher")

function switchProxy() {
  var selecter = document.getElementById("themeSwitcher");
  var selectedOption = selecter.value;

  localStorage.setItem("theme", selectedOption);
  var storedChoice = localStorage.getItem("theme");
};

function setdefaults() {
 if (localStorage.theme == undefined) {
  localStorage.setItem("theme", "default")
 };
};

function reloadpage() {
  location.reload();
}

themefile = document.getElementById("themecss");
particlestheme = document.getElementById("paeticlesrc");
function setthemes() {
 if (localStorage.theme == "default") {
  themefile.href = "/static/index.css";
  particlesJS("particles-js", {"particles":{"number":{"value":270,"density":{"enable":true,"value_area":3709.0524554716385}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#8600ff"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":2.077789232256878,"opacity_min":0.03196598818856736,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":78.91600969088593,"color":"#ffffff","opacity":0.047349605814531556,"width":1},"move":{"enable":true,"speed":200,"direction":"none","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":316,"rotateY":316}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":239.74491141425517,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":3.99574852357092,"duration":0.23974491141425514,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
 } else if (localStorage.theme == "noir") {
  themefile.href = "/static/css/themes/noir.css";
 } else if (localStorage.theme == "void") {
  themefile.href = "/static/css/themes/void.css";
 } else if (localStorage.theme == "ip") {
  themefile.href ="/static/css/themes/ironprime.css";
 } else if (localStorage.theme == "xg") {
  themefile.href ="/static/css/themes/xgames.css";
 } else if (localStorage.theme == "stealth") {
  themefile.href ="/static/css/themes/stealth.css";
 } else if (localStorage.theme == "fg") {
  themefile.href ="/static/css/themes/froggermans.css";
  particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#378805"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":0.5684540486109415,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":0,"size_min":1.6241544246026904,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
 } else if (localStorage.theme == "ghost") {
  themefile.href ="/static/css/themes/ghost.css";
 } else if (localStorage.theme == "midnight") {
  themefile.href ="/static/css/themes/midnight.css";
 } else if (localStorage.theme == "fire") {
  themefile.href = "/static/css/themes/fire.css";
  particlesJS("particles-js", {"particles":{"number":{"value":149,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffc200"},"shape":{"type":"circle","stroke":{"width":1,"color":"#ff0000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":10,"opacity_min":0,"sync":false}},"size":{"value":4.008530152163807,"random":true,"anim":{"enable":true,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":19.24094473038627,"direction":"top-right","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1362.9002517356944,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
 }
  themefile.href = "/static/index.css";
  particlesJS("particles-js", {"particles":{"number":{"value":270,"density":{"enable":true,"value_area":3709.0524554716385}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#8600ff"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":2.077789232256878,"opacity_min":0.03196598818856736,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":78.91600969088593,"color":"#ffffff","opacity":0.047349605814531556,"width":1},"move":{"enable":true,"speed":200,"direction":"none","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":316,"rotateY":316}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":239.74491141425517,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":3.99574852357092,"duration":0.23974491141425514,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

 }
};
  
    
setuserbar();
setusercloak();
setbartoggleicon();
setcloaktoggleicon();
setdefaults();
setthemes();
proxySel.value = proxyStored;


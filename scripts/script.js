/* Variables definition part */
var menu = document.getElementById('menu');
var content = document.getElementById('content');
var photo = document.getElementById('autorPhoto');
var collapsed = false;
var github = document.getElementById('github');
var linkedin = document.getElementById('linkedin');
var petit = false;
var moyen = false;
var grand = false;

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
if(x<960){
  petit = true;
}else if(x<1024){
  moyen = true;
}else{
  grand = true;
}
// console.log(x + ' × ' + y);

/* Windows resize handling function */

window.onresize = (function(){
      w = window;
      d = document;
      e = d.documentElement;
      g = d.getElementsByTagName('body')[0];
      x = w.innerWidth || e.clientWidth || g.clientWidth;
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      if(x<960 && !petit){
        //Petit
        console.log("petit");
        petit = true;
        moyen = false;
        grand = false;
        menu.style.width = "100vw";
        menu.style.left = "-100vw";
        content.style.width = "100vw";
        content.style.left = 0;
      }else if(x<1700 && x>960 && !moyen ){
        //Moyen
        petit= false;
        moyen = true;
        grand = false;
        menu.style.width = 280;
        menu.style.left = 0;
        content.style.width = x-280;
        content.style.left = 280;
      }else if(!grand && x>1700){
        //Grand
        petit = false;
        moyen = false;
        grand = true;
        menu.style.width = "17vw";
        menu.style.left = 0;
        content.style.whith = "83vw";
        content.style.left = "17vw";
      }
});

/* Redirect links to Github, Linkedin, etc..; */

github.addEventListener('click', function(){
  location.assign("http://github.com/VDCD/");
});

linkedin.addEventListener('click', function(){
  location.assign("http://ca.linkedin.com/pub/victor-dupuy/a0/b89/752");
});


/* Scrolls part, give scroll ability on specific divs */

Velocity(
  content,
  "scroll",
  {
    container : content
  }
);


/* Event Listeners part, allows to handle click and hover events with Velocity actions */

photo.addEventListener('click', function() {
  if(!collapsed){
    Velocity(
      menu,
      {"width" : "17vw"},
      {
        duration : 200
      }
    );

    if(x>=1700){
      Velocity(
        content,
        {"left" : "17vw"},
        {
          duration : 200
        }
      );
    }else if(x>=960 ){
      Velocity(
        content,
        {"left" : 280, "width" : (x-280)},
        {
          duration : 200
        }
      );
    }else{
      Velocity(
        menu,
        {"left" : -280},
        {duration : 1}
      );
      Velocity(
        content,
        {"left":0, "width" : x},
        {duration : 200}
      );
    }

    Velocity(
      photo,
      {"width": "5vh"}
    );

    collapsed = true;
  }else{
    Velocity(
      menu,
      {"width" : "100vw"},
      {
        duration : 200
      }
    );

    Velocity(
      content,
      {"left" : "100vw"},
      {
        duration : 200
      }
    );

    Velocity(
      photo,
      {"width" : "10vw"},{
        duration : 200
      }
    );
    collapsed = false;
  }
}, false);

photo.addEventListener('mouseover', function(){
  photo.className = photo.className + " swing";
});

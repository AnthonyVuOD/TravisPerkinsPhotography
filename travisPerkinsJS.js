//fade in of About image
/*var bioPic = document.getElementById('travisBioPic');
window.addEventListener('load', function(){
  bioPic.style.opacity = "1";
});

//fade in of About info
var bio = document.getElementById('bio');
window.addEventListener('load', function(){
  bio.style.opacity = "1";
});

// fade in of Portfolio
var port = document.getElementById('portfolioContainer');
window.addEventListener('load',function(){
  port.style.opacity="1";
});

// fade in of contact page content
var hammock = document.getElementById('containerContact');
window.addEventListener('load', function(){
  hammock.style.opacity = "1";
});
*/

// fade in effect
var fade = document.getElementsByClassName("fadeIn");
window.addEventListener('load', function(){
  for(var i=0; i<fade.length; i++){
    fade[i].style.opacity = "1";
  };
});

// photo slide People
var peopleImages = new Array ("People/people1.jpg", "People/people2.jpg", "People/people3.jpg","People/people4.jpg","People/people5.jpg","People/people6.jpg","People/people7.jpg","People/people8.jpg","People/people9.jpg","People/people10.jpg","People/people11.jpg","People/people12.jpg","People/people13.jpg","People/people14.jpg","People/people15.jpg")
var image_number = 0;
var image_length = peopleImages.length -1;

function changeSlidePeople(num){
  image_number = image_number + num;
  if (image_number>image_length){
    image_number = 0;
  }
  if (image_number<0){
    image_number = image_length;
  }
  document.slide.src = peopleImages[image_number];
};

//photoslide Landscape
var landImages = new Array ("Landscape/land1.jpg", "Landscape/land2.jpg", "Landscape/land3.jpg", "Landscape/land4.jpg", "Landscape/land5.jpg", "Landscape/land6.jpg", "Landscape/land7.jpg", "Landscape/land8.jpg", "Landscape/land9.jpg", "Landscape/land10.jpg", "Landscape/land11.jpg", "Landscape/land12.jpg", "Landscape/land13.jpg", "Landscape/land14.jpg", "Landscape/land15.jpg")
var image_number = 0;
var image_length = landImages.length -1;

function changeSlideLand(num){
  image_number = image_number + num;
  if (image_number>image_length){
    image_number = 0;
  }
  if (image_number<0){
    image_number = image_length;
  }
  document.slide.src = landImages[image_number];
};

//photoslide Misc
var miscImages = new Array ("Misc/misc1.jpg", "Misc/misc2.jpg", "Misc/misc3.jpg", "Misc/misc4.jpg", "Misc/misc5.jpg", "Misc/misc6.jpg", "Misc/misc7.jpg", "Misc/misc8.jpg", "Misc/misc9.jpg", "Misc/misc10.jpg", "Misc/misc11.jpg", "Misc/misc12.jpg", "Misc/misc13.jpg", "Misc/misc14.jpg", "Misc/misc15.jpg")
var image_number = 0;
var image_length = miscImages.length -1;

function changeSlideMisc(num){
  image_number = image_number + num;
  if (image_number>image_length){
    image_number = 0;
  }
  if (image_number<0){
    image_number = image_length;
  }
  document.slide.src = miscImages[image_number];
};

//photoslide Misc
var musicImages = new Array ("Music/music1.jpg", "Music/music2.jpg", "Music/music3.jpg", "Music/music4.jpg", "Music/music5.jpg", "Music/music6.jpg", "Music/music7.jpg", "Music/music8.jpg", "Music/music9.jpg", "Music/music10.jpg", "Music/music11.jpg", "Music/music12.jpg", "Music/music13.jpg", "Music/music14.jpg", "Music/music15.jpg" )
var image_number = 0;
var image_length = musicImages.length -1;

function changeSlideMusic(num){
  image_number = image_number + num;
  if (image_number>image_length){
    image_number = 0;
  }
  if (image_number<0){
    image_number = image_length;
  }
  document.slide.src = musicImages[image_number];
};


// changing grayscale of Contact icons with mouse over
var contactIcons = document.getElementsByClassName('contactIcons');
for (i=0; i<contactIcons.length; i++){
    contactIcons[i].addEventListener("mouseover", function(){
      this.setAttribute("style", "-webkit-filter:grayscale(" + 0 + "%)");
    });
    contactIcons[i].addEventListener("mouseout", function(){
      this.setAttribute("style", "-webkit-filter:grayscale(" + 100 + "%)");
    });
};

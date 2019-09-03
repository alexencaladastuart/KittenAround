'use strict';

/* global chrome*/

// Arrays storing images for extension
var kitten = [
    'https://media.giphy.com/media/PcwpnqpwAfRK/giphy.gif',
    'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg',
    'http://www.pethealthnetwork.com/sites/default/files/kitten-care162282356.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7YkWsQqqW22l414Z0LRwZs2fveYe9DXI6HfnWaYnNhcHovpZkA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSHq-dN59upZvD0hLvSj4mKzhZAUsoK1rSZdlHhgFIdWMrCnTnA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS96FLyhxR2In_nYvpcPCxdvhYXllskegc1x-0Gsk-Q7wC_f1gA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvYRygXVdTCOb5YqeET7bILDh69-vsah8i4mxtd2vu_Ohbhpf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCzw-nz63ho9IV8gw1MO--f8n-yhj14kbk5ITRAWvjmqCKPfo7w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhArQ6eoduYnPeUamzFGf9lFwp3wOJN3ZHVRQtjqU5SjhSVg_x8A',
    'data:image/jpeg;base64,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',
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1304439eb63a0f9450681b7510ca8cb&w=1000&q=80'
    ];

var puppies = [
    'https://media.giphy.com/media/bmrxNoGqGNMAM/giphy.gif',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/280px-Golde33443.jpg',
    'https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg',
    'https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/puppy-3143-ad4140d8f6055cda2cd8956d4af37ea9@1x.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxz0wLmKmzLxnfBVmjmerQeNYR5VfrqIUS9rz0hGalH5TsWDY',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnI2ThQRuDTxj4ddnlFyR44bs45HeJOKg7_oErDtIP8VukR0rmA',
    'https://news.images.itv.com/image/file/1623541/stream_img.jpg',
    'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUqFvRogkbqY5Ycvtx8KIccGSJTipArVsRzVLpVilOIl9mbKd',
    'https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2018/04/feeding.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsKg_gjSq-ZVKhhMMK5gu4P3S0KrlVThJ7RjuH_Y6NSdJLkum_g',
    'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/puppy-vomiting_canna-pet-1024x682.jpg'
    ];

var fish = [
    'https://media.giphy.com/media/10h8d7DM6tOTK/giphy.gif',
    'https://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$',
    'https://d3pz1jifuab5zg.cloudfront.net/1970/01/30153329/clownfish.jpg',
    'https://t3.ftcdn.net/jpg/01/76/64/30/240_F_176643026_kBWH0PWqdYfIVjXBqjgUXYsuPeWLVeg6.jpg',
    'https://s7d2.scene7.com/is/image/PetSmart/5223698?$sclp-prd-main_large$',
    'https://i.pinimg.com/236x/0b/25/34/0b2534091d482a4a2269bd65a972d7c5--colorful-fish-colorful-animals.jpg',
    'https://themysteriousworld.com/wp-content/uploads/2014/02/LionFish.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FQHdXrJh0-VWw8qs_zeL5KcZgz3ANYKnRdqwTz7c7u9sm-2o2A',
    'https://images3.ratemyfishtank.com/photo/12/910x450h/33000/33429/Neon-Blue-Discus-YCMAgn.jpg',
    'https://mgl.skyrock.net/art/SHAR.9169.334.2.jpg',
    'https://i.pinimg.com/originals/30/d5/45/30d545b333151ecec49084bc5535b6db.jpg'
    ];

// Changes website's images to selected animal
function changeImage(x){
  var images = document.getElementsByTagName('img');
  for (var i = 0, len = images.length; i < len; i++) {
    images[i].src = x[i % x.length];
  }
}

// Enables click functionality in extension popup
function click(e) {
  chrome.tabs.executeScript(null,
      {code:"changeImage(" + e.target.id +");"});
  window.close();
}

// Allows popup to be clicked
document.addEventListener('DOMContentLoaded', function () {
  var options = document.getElementsByClassName('menu');
  for (var i = 0, len = options.length; i < len; i++) {
    options[i].addEventListener('click', click);
  }
});

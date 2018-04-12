// // var text = [
// //   '<h1>Caffeinade</h1><p class="tagline">The refreshing way </br> to energize.</p></p>',
// //   '<p class="reserve"> Reserve yours today! <div class="venmo">venmo/caffeinade</div>'
// // ];
// var counter = 1;
// // var elem = document.getElementById("changeText");
// var inst = setInterval(currentSlide(counter), 2000);

// // function change() {
// //   console.log("change");
// //   let header = document.getElementById("title-wrapper");
// //   header.innerHTML = text[counter];
//   counter++;
//   if (counter >= 2) {
//     counter = 1;
// clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
// //   }
// // }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("title-wrapper");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

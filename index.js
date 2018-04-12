var text = [
  '<h1>Caffeinade</h1><p class="tagline">The refreshing way </br> to energize.</p></p>',
  '<p class="reserve"> Reserve yours today! <div class="venmo">venmo/caffeinade</div>'
];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);

function change() {
  console.log("change");
  let header = document.getElementById("title-wrapper");
  header.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

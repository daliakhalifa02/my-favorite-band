document.getElementById("icon").addEventListener("click", myFunction);

function myFunction(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

var post= document.getElementById("comment");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});

// const donate5 = document.getElementById("donate5");
// const donate10 = document.getElementById("donate10");
// const donate20 = document.getElementById("donate20");
// const donate50 = document.getElementById("donate50");
// const donate100 = document.getElementById("donate100");
// const donate = document.getElementById("donate");
// const customize = document.getElementById("customize");
// let total = 0;

// donate5.addEventListener("click", function () {
//   total += 5;
//   updateTotal();
// });

// donate10.addEventListener("click", function () {
//   total += 10;
//   updateTotal();
// });

// donate20.addEventListener("click", function () {
//   total += 20;
//   updateTotal();
// });

// donate50.addEventListener("click", function () {
//   total += 50;
//   updateTotal();
// });

// donate100.addEventListener("click", function () {
//   total += 100;
//   updateTotal();
// });

// customize.addEventListener("click", function(){
//   total += customize;
//   updateTotal();
// })

// donate.addEventListener("click", function () {
//   const customizeValue = parseInt(customize.value);
//   if (!isNaN(customizeValue)) {
//     total += customizeValue;
//     updateTotal();
//   }
// });

// function updateTotal() {
//   document.getElementById("total").innerHTML = "Total is: " + total;
// }

const donate5 = document.getElementById("donate5");
const donate10 = document.getElementById("donate10");
const donate20 = document.getElementById("donate20");
const donate50 = document.getElementById("donate50");
const donate100 = document.getElementById("donate100");
const customize = document.getElementById("customize");
const donate = document.getElementById("donate");
let total = 0;

donate5.addEventListener("click", function () {
  total += 5;
  updateTotal();
});

donate10.addEventListener("click", function () {
  total += 10;
  updateTotal();
});

donate20.addEventListener("click", function () {
  total += 20;
  updateTotal();
});

donate50.addEventListener("click", function () {
  total += 50;
  updateTotal();
});

donate100.addEventListener("click", function () {
  total += 100;
  updateTotal();
});

donate.addEventListener("click", function () {
  const customizeValue = parseInt(customize.value);
  if (!isNaN(customizeValue)) {
    total += customizeValue;
    updateTotal();
  }
});

function updateTotal() {
  document.getElementById("total").innerHTML = "A total of " + total + "$ has been donated to Beirut. Thank you! ";
}

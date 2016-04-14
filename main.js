// var headerArray = document.getElementsByTagName("h1");
//
// console.log(headerArray[1]);

// var bearliArray = document.getElementsByClassName('bearname');
// console.log(bearliArray[0]);

var picture = document.getElementById("mainpicture");

picture.src = "http://placekitten.com/344/543"

picture.className = "kittenimg";

var newImg = document.createElement("img");

var newH1 = document.createElement("h1");

var newP = document.createElement("p");

var body = document.getElementsByTagName("body")[0];

body.appendChild(newImg);

body.appendChild(newH1);

body.appendChild(newP);

newH1.innerText = "cats have unvaded!";

newImg.src = "http://placekitten.com/322/518";

newP.innerTex = "We're here to take over your page!";

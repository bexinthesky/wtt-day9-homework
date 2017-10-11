// Create some gray (#ccc) boxes in html (at least 6 boxes)
// (100px wide and 100px high should be good)
// target the boxes in the HTML
// add event listener / function so that when you click on a box, the background color changes
// then, make it so that if a user clicks on a box a second time, change the border radius of the box

// BONUS: Make it so only one box can be your new color at a time
let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

// let colorChange = document.getElementsByClassName('colorChange');


let boxes = document.getElementsByClassName('boxes');

for(i = 0; i < boxes.length; i++) {
    console.log(i);
    boxes[i].addEventListener("click", boxTransformation);
}

function boxTransformation(e) {
  for(i = 0; i < boxes.length; i++) {
    if(e.target === boxes[i]) {
      boxes[i].style.backgroundColor = randomColor;
    }
  } if(e.target === boxes[i]) {
    e.target.classList.add('border-change');
  }

}

// function boxTransformation(e){
// 	for(i = 0; i < boxes.length; i++) {
//   	if (boxes[i].classList.contains('colorChange') && boxes[i].classList.contains('border-change')) {
//       boxes[i].classList.remove('colorChange');
//       boxes[i].classList.remove('border-change');
//     }
// 	}
//
//   if (e.target.classList.contains('colorChange')) {
//       e.target.classList.add('border-change');
//   } else if (e.target.classList.contains('border-change')) {
//   	e.target.classList.remove('border-change');
//     e.target.classList.remove('colorChange');
//   } else {
//       e.target.classList.add('colorChange');
//   }
// }


// elements[i].style.backgroundColor = "blue";
// colorChange.style.backgroundColor = randomColor;

// var boxes = document.querySelector('.boxes');
// boxes.addEventListener("click", function(e) {
//   if (e.target === e.currentTarget) {
//     boxes.style.backgroundColor = randomColor;
//   }
//   //e.preventDefault();
// });

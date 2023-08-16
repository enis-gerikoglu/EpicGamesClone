let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 10000)
  
function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`
}
function resetInterval() {  
  clearInterval(interval)
  interval = setInterval(run, 2000)
  
}

const sideComponents = document.querySelectorAll('.side-component');
const imageContainer = document.getElementById('imgs');

sideComponents.forEach((sideComponent, index) => {
    sideComponent.addEventListener('click', () => {
      resetInterval()

        imageContainer.style.transform = `translateX(-${index * 100}%)`;
       idx=index;
    });
});


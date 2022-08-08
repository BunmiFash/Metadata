// VARIABLES

const dropArea = document.querySelector('.container');
const btn = document.querySelector('.browse');
const select = document.querySelector('input');
const dropfile = document.querySelector('h2');
const popUp  = document.querySelector('.container2');
const body = document.querySelector('body');
const cancelbtn = document.querySelector('#cancel')
let file;

// DRAG AND DROP FUNCTIONS
// DRAG OVER

function over(e){
    e.preventDefault();
    dropArea.classList.add('active');
    dropfile.textContent = 'Drop file to upload';
}
dropArea.addEventListener('dragover',over)

// DRAG LEAVE

function leave(e){
    e.preventDefault();
    dropArea.classList.remove('active');
    dropfile.textContent = 'Click file to upload';
}
dropArea.addEventListener('dragleave',leave)

// DROP FILE

function drop(e){
    // e.preventDefault();
    file = e.dataTransfer.files();
    popUp.style.display = 'block';
    dropArea.style.display = 'none';
    body.style.backgroundColor = '#2B2B2B';
    // showfile()
}
dropArea.addEventListener('drop',drop)

// SHOWING FILES

// function showfile(){
//     let fileReader = new FileReader();
//     fileReader.onload = ()=>{
//         let fileURL = fileReader.result;
// let imgTag = `<img src="${fileURL} alt="image">`;
//         dropArea.innerHTML = imgTag;
//     }
//     fileReader.readAsDataURL(file);
// }

// BROWSE

function button(){
    select.click();
}
btn.addEventListener('click', button)

select.addEventListener('change' , function(){
    file = this.files;
    dropArea.classList.add('active');
    popUp.style.display = 'block';
    dropArea.style.display = 'none';
    body.style.backgroundColor = '#2B2B2B';
    showfile();

});

// UPLOADING

const upload = document.querySelector('#btn');
console.log(upload)
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("read");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
upload.addEventListener('click', move)

// CANCEL UPLOAD
function cancel(){
    popUp.style.display = 'none';
    dropArea.style.display = 'block';
    body.style.backgroundColor = '#FFFFFF';
}
cancelbtn.addEventListener('click', cancel)




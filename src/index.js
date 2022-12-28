import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 //document.querySelector("h1").addEventListener("click",function(e){
//alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

//* [ ] `mouseover`

document.querySelector("h2").addEventListener("mouseover",(Event)=> {
  
    Event.target.style.color = "green";

})

//* [ ] `keydown`

const keydowncuk = document.querySelector('input');
const log = document.getElementById('log');

keydowncuk.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

// [ ] `wheel`

const imgWheel = document.querySelectorAll("footer");
imgWheel.forEach((footer) => {
  footer.addEventListener("wheel", (event) => {
    footer.style.backgroundColor = "yellow";
  });
});

// [ ] `load`

window.addEventListener("load", (event) => {
  alert("Sayfa tamamdırr!!!!");
});

// [ ] `focus`

let buttonFooter = document.querySelector(".dokunalım");
buttonFooter.addEventListener("focus", () => {
  buttonFooter.style.color = "blue";
  buttonFooter.style.backgroundColor = "white";
  buttonFooter.style.fontSize = " 1.7rem";
});

 //[ ] `resize`

 //[ ] `scroll` 
 //[ ] `select`




 //[ ] `dblclick`

 const card = document.querySelectorAll("img");
 card.forEach((img)=>{
  img.addEventListener('dblclick', (e) => {
    img.style.filter= "grayscale(100%)";
    });
 })
// [] 'click'
 const cardb = document.querySelectorAll("img");
 cardb.forEach((img)=>{
  img.addEventListener('click', (e) => {
    img.style.filter= "grayscale(0%)";
    });
  })
 //[ ] `drag / drop`*/

/*Je vérifie la liaison du fichier :*/
console.log('Le fichier est bien relié !');

/*MENU BURGER :*/
/*Je sélectionne les éléments dont j'ai besoin pour mettre en place le menu burger :*/
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
/*Je vérifie :*/
console.log(burger);
console.log(menu);

/*J'ajoute un click qui me declanche une fonction sur le menu burger :*/
burger.addEventListener('click', apparitionMenu);

/*Je crée la fonction apparitionMenu :*/
function apparitionMenu() {
  /*Je vérifie le declanchement de la fonction :*/
  console.log('La fonction se declanche !');
  /*Je vérifie le display de mon menu :*/
  console.log(menu.style.display);

  if (menu.style.display === 'block') {
    /*Je fais disparaitre ma nav :*/
    menu.style.display = 'none';
    /*Je modifie l'icon du menu burger :*/
    burger.src = 'img/burger.png';
  } else {
    menu.style.display = 'block';
    burger.src = 'img/close.png';
  }
}
window.onload= defilImg
current_img = 0;
arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg']
 
 
function defilImg(){
  if(current_img == arrImg.length)
  current_img = 0;
  document.getElementById('imageSuivante').src = arrImg[current_img++];
  window.setTimeout('defilImg()',2000);
}
var prenom = document.getElementsByTagName("input")[1];
console.log(prenom);

var mail = document.getElementsByTagName("input")[3];
console.log(mail);

var message = document.getElementsByTagName("textarea")[0];
console.log(message);

var btn = document.getElementsByTagName("input")[4];
console.log(btn);

var champ = document.getElementsByClassName("inputReq");


btn.addEventListener("click", () => {
    alert(prenom.value+ " merci pour votre commentaire !")
});

for(i=0; i < champ.length; i++) {
    champ[i].addEventListener("input", () => {
        if (prenom.value == "" || mail.value == "" || message.value == "") {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    })
}
$('.carousel').carousel({
  interval: 2000
})
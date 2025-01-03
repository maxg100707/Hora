function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 19;
  var min = data.getMinutes();
  msg.innerHTML = "Agora sao " + hora + " horas e " + min + " minutos";
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "/img/manha.jpg";
    document.body.style.backgroundColor = "#E0DF72";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "/img/tarde.jpg";
    document.body.style.backgroundColor = "#E16E2C";
  } else {
    //boa noite
    img.src = "/img/noite.jpg";
    document.body.style.backgroundColor = "#273EC3";
  }
}
/*
        _             _
       / \           / \
      /   \         /   \
     /     \_______/     \
    /  ___           ___  \
   |  / ()\         / ()\  |
   |  \___/         \___/  |
   |           ___         |
   \          |___|        /
    \           |         /
     \      \___|___/    /
      \_               _/
        \_____________/  
           MIAW MIAW


instagram : https://www.instagram.com/maxg1007/
portifolio : https://maxg100707.github.io/Portifolio/

*/

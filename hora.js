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
    img.src = "/hora/img/manha.jpg";
    document.body.style.backgroundColor = "#E0DF72";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "/hora/img/tarde.jpg";
    document.body.style.backgroundColor = "#E16E2C";
  } else {
    //boa noite
    img.src = "/hora/img/noite.jpg";
    document.body.style.backgroundColor = "#273EC3";
  }
}

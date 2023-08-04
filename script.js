function toggleMode() {
  const html = document.documentElement;

  //o classList é um objeto que vai ter algumas propriedades
  // if(html.classList.contains('light')) {
  //  html.classList.remove('light');
  // }
  // else {
  //  html.classList.add('light');
  // }
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //setAtribute serve para adicionar, ajustar, modificar um atributo, neste caso é o src.
    img.setAttribute("src", "./assets/brian-sun.png");
    img.setAttribute("alt", "Brian, só que de óculos.");
  } else {
    img.setAttribute("src", "./assets/brian.png");
  }
}

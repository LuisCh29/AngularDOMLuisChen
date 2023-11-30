export function yellowSubmarine() {
   document.getElementById('titol').style.color = 'yellow';
}

export function changeSize() {
  document.getElementById('taula').style.blockSize = '50px'
}

export function countWords(){
  let text = document.getElementById("lorem").innerHTML;
  let contador = 0;
  for (let i = 0; i < text.length; i++){
    if (text[i]===" "){
      contador++
    }
  }
  return contador
}


export function imatge() {
  document.getElementById('foto')
  foto.innerHTML = '<img src= "https://www.irontec.com/image/trainingsFull/49-AngularLogo.png">'
}

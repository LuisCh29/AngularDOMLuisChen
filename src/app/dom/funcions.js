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

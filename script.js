function carregar(){

var msg = document.querySelector("div#msg")
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

var titulo = document.getElementById('h1')
titulo.innerText =`${hora} horas`

if (hora > 6 && hora <12) {
    msg.innerHTML += "\n Bom dia!"
    img.src = "manha2.png"
    document.body.style.backgroundColor ='#f7eccd'
    document.body.style.color = 'black'

} else if (hora > 12 && hora <= 18) {
    msg.innerHTML += ("\n Boa tarde!")
    img.src = 'tarde1.png'
    document.body.style.backgroundColor = '#fcad08'
    
} else if (hora >= 18 && hora < 24 ) {
    msg.innerText += ("\n Boa noite!")
    img.src = 'noite1.png'
    document.body.style.backgroundColor ='#022a3d'
} else {
    msg.innerText = ("Boa madrugada!")
    img.src = 'madrugada1.png'
    document.body.style.backgroundColor = '#818998'
    
}    
}
 


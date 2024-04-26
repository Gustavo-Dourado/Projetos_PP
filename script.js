function toggleModel() {
    const html =document.documentElement

    html.classList.toggle("light")

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // } 
    // A Lógica dessa funçao toggle está representada neste comentário acima

    const imagem = document.getElementById('card-foto')
    
    if(html.classList.contains('light')){
        imagem.style.backgroundImage = `url("./assets/avatar-light.png")`
    } else{
        imagem.style.backgroundImage = `url("./assets/avatar.png")`
    } 
    
}
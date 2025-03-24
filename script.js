document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    aumentarFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    const diminuirFonteBotao = document.getElementById('aumentar-fonte');
    diminuirFonteBotaoFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })


})




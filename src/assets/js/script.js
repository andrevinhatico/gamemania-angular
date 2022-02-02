// $(document).ready(function() {

//     $("#menu-barra").click(function() {

//         $("#menu").toggleClass("menu-ativo");

//         // if ( $("#menu").hasClass("menu-ativo") ) { //verifica se exite
//         //     //Esconder o menu 
//         //     $("#menu").removeClass("menu-ativo")
//         // } else {
//         //     //Mostrar o menu
//         //     $("#menu").addClass("menu-ativo")
//         // }
//     })

// })





function mostrarMenu() {

    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";
    }
}


function mostraPopUp() {

    window.alert("Aproveite Nossas Promoções!!!")
}


function cadastrarEmail() {

    let emailDigitado = document.getElementById("exampleInputEmail1").value
    let senhaDigitada = document.getElementById("exampleInputPassword1").value

    console.log(emailDigitado, senhaDigitada);
}


function renderizarProdutos() {

    let espaco = document.getElementById("espaco-titulo")

    let listaProdutos = [

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Playstation",
            descricao:"PlayStation 4 e PS5",
            preco: "R$ 3.000,00"
        },

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Nitendo",
            descricao:"Super Nitendo",
            preco: "R$ 2.100,00"
        },

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Switch",
            descricao:"Game super",
            preco: "R$ 1.000,00"
        },

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Atari",
            descricao:"Pura Nostalgia",
            preco: "R$ 500,00"
        },

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Tec-Toy",
            descricao:"Master e Mega",
            preco: "R$ 1.200,00"
        },

        {
            imagem: "/assets/img/xbox.svg",
            titulo: "Gradiente",
            descricao:"Turbo Game",
            preco: "R$ 1.200,00"
        }
    ]
    
    
    let template = "";
    
    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
        
        console.log(produto)
        
        template +=  `<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch" >

                <div class="card text-center bg-light">
                    <img src="${produto.imagem}" alt="imagem console" class="card-img-top">

                    <div class="card-header preco-projeto">
                        ${produto.preco}
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${produto.titulo}</h5>
                        <p class="card-text">${produto.descricao} </p>
                    </div>

                    <div class="card-footer">

                        <form class="d-block">
                            <button class="btn btn-projeto">
                                Adicionar ao Carrinho
                            </button>
                        </form>
                        <small class="text-success">Em estoque</small>

                    </div>

                </div>

            </div>`
                        
                    }         
                
                
             
                 espaco.innerHTML = template
    
    }    
        
        
        
        
        
        
        
        
               
        
        
       
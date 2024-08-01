// Adiciona um ouvinte de evento que será executado quando o documento for totalmente carregado
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm') || null;
    if (form != null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const idade = document.getElementById('idade').value;
            const cpfNovo = document.getElementById('cpfNovo').value;
            const genero = document.getElementById('genero').value;
            const email = document.getElementById('email').value;
            const ddd = document.getElementById('ddd').value;
            const celular = document.getElementById('celular').value;
            const endereco = document.getElementById('endereco').value;
            const senhaNova = document.getElementById('senhaNova').value;
            const repSenhaNova = document.getElementById('repSenhaNova').value;

            if(senhaNova === repSenhaNova){

                const usuario = { nome, idade, cpfNovo, genero, email, ddd, celular, endereco, senhaNova, repSenhaNova };
                let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                usuarios.push(usuario);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('Usuário cadastrado com sucesso!');
                form.reset();
            }else{
                alert('As senhas estão diferentes!')
            }
                
        });
    }

});

function logar() {
    event.preventDefault();
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let mensagem = "Usuário ou senha incorreta!";
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    let usuario = usuarios.find(usuario => usuario.cpfNovo == cpf && usuario.senhaNova == senha);
    if (usuario) { // Verifica se o usuário existe
        alert('Parabéns! Logado.');
        localStorage.setItem("logado", JSON.stringify(usuario));
        window.location.href = "perfil.html";
    }
    else {
        alert(mensagem);
    }
}

function carrega() {
    let logado = JSON.parse(localStorage.getItem('logado'));
    if (logado == null) {
        alert('Nenhum usuário cadastrado!')
    } else {
        document.getElementById('nomeLogado').innerHTML = logado.nome;
        document.getElementById('idadeLogado').innerHTML = logado.idade;
        document.getElementById('cpfLogado').innerHTML = logado.cpfNovo;
        document.getElementById('generoLogado').innerHTML = logado.genero;
        document.getElementById('emailLogado').innerHTML = logado.email;
        document.getElementById('contatoLogado').innerHTML = logado.celular;
        document.getElementById('enderecoLogado').innerHTML = logado.endereco;
    }
}


function voltar() {
    window.location.href = 'index.html'
}

function login() {
    window.location.href = 'cadastro.html'
}


function pesquisarCachorro() {
    cachorros.innerHTML = ''
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];
    const filtroAchados = petsAchados.filter(petAchado => petAchado.especiePet == 'Cachorro');
    const filtroPets = pets.filter(pet => pet.especiePet == 'Cachorro');
    let listaCachorros = filtroAchados.concat(filtroPets);

    for (i = 0; i < listaCachorros.length; i++) {
        cachorros.innerHTML +=
           '<div class="card">' +
            '<h2 class="cardh2">' + listaCachorros[i].nomePet + '</h2>' +
            '<p class="cardp">' + listaCachorros[i].especiePet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].racaPet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].pelagemPet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].generoPet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].corPet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].portePet + '</p>' +
            '<p class="cardp">' + listaCachorros[i].comentarioPet + '</p>' +
            `<img src="${listaCachorros[i].fotoPet64}" alt="" class="cardimg">` +
            '<div>'
    }
}

function pesquisarGatos() {
    gatos.innerHTML = ''
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];
    const filtroAchados = petsAchados.filter(petAchado => petAchado.especiePet == 'Gato');
    const filtroPets = pets.filter(pet => pet.especiePet == 'Gato');
    let listaGatos = filtroAchados.concat(filtroPets);

    for (i = 0; i < listaGatos.length; i++) {
        gatos.innerHTML +=
            '<div class="card">' +
            '<h2 class="cardh2">' + listaGatos[i].nomePet + '</h2>' +
            '<p class="cardp">' + listaGatos[i].especiePet + '</p>' +
            '<p class="cardp">' + listaGatos[i].racaPet + '</p>' +
            '<p class="cardp">' + listaGatos[i].pelagemPet + '</p>' +
            '<p class="cardp">' + listaGatos[i].generoPet + '</p>' +
            '<p class="cardp">' + listaGatos[i].corPet + '</p>' +
            '<p class="cardp">' + listaGatos[i].portePet + '</p>' +
            '<p class="cardp">' + listaGatos[i].comentarioPet + '</p>' +
            `<img src="${listaGatos[i].fotoPet64}" alt="" class="cardimg">` +
            '<div>'
    }
}

function pesquisarOutros() {


    outros.innerHTML = ''
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];
    const filtroAchados = petsAchados.filter(petAchado => petAchado.especiePet == 'Outro');
    const filtroPets = pets.filter(pet => pet.especiePet == 'Outro');
    let listaOutros = filtroAchados.concat(filtroPets);

    for (i = 0; i < listaOutros.length; i++) {
        outros.innerHTML +=
            '<div class="card">' +
                '<h2 class="cardh2">' + listaOutros[i].nomePet + '</h2>' +
                '<p class="cardp">' + listaOutros[i].especiePet + '</p>' +
                '<p class="cardp">' + listaOutros[i].racaPet + '</p>' +
                '<p class="cardp">' + listaOutros[i].pelagemPet + '</p>' +
                '<p class="cardp">' + listaOutros[i].generoPet + '</p>' +
                '<p class="cardp">' + listaOutros[i].corPet + '</p>' +
                '<p class="cardp">' + listaOutros[i].portePet + '</p>' +
                '<p class="cardp">' + listaOutros[i].comentarioPet + '</p>' +
                `<img src="${listaOutros[i].fotoPet64}" alt="" class="cardimg">` +
                '<div>'
    }
}

function limparFiltro() {

    location.reload()

}

function perfil() {
    window.location.href = 'perfil.html'
}

function cadastroPet() {
    window.location.href = 'petAchadoPerdido.html'
}

function buscapet() {
    window.location.href = 'buscapet.html'
}

function perdiMeuPet() {
    window.location.href = 'cadastroPet.html'
}

function acheiMeuPet() {
    window.location.href = 'cadastroPetAchado.html'
}

function cadastro() {
    document.getElementsByClassName('cadastrodiv')[0].style.display = 'block'
    document.getElementsByClassName('logindiv')[0].style.display = 'none'
}
function voltarCadastro() {
    document.getElementsByClassName('cadastrodiv')[0].style.display = 'none'
    document.getElementsByClassName('logindiv')[0].style.display = 'block'
}


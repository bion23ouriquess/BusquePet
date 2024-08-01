document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroDivAchado');
    const fotoPet = document.getElementById('fotoPet');
    let fotoPet64 = null;
    console.log(fotoPet);
    fotoPet.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64String = e.target.result;

                fotoPet64 = base64String;

            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const id = Date.now();
        const nomePet = document.getElementById('nomePet').value;
        const especiePet = document.getElementById('especiePet').value;
        const racaPet = document.getElementById('racaPet').value;
        const portePet = document.getElementById('portePet').value;
        const corPet = document.getElementById('corPet').value;
        const generoPet = document.getElementById('generoPet').value;
        const pelagemPet = document.getElementById('pelagemPet').value;
        const comentarioPet = document.getElementById('comentarioPet').value;

        const petAchado = { id, nomePet, especiePet, racaPet, portePet, corPet, generoPet, pelagemPet, fotoPet, fotoPet64, comentarioPet };

        let petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];
        petsAchados.push(petAchado);
        localStorage.setItem('petsAchados', JSON.stringify(petsAchados));
        form.reset();
        alert('Pet cadastrado com sucesso!');
        window.location.href = 'index.html'
    });
});

function voltar() {
    window.location.href = 'index.html'
}

function mostrarTodos() {
    const encontreiFeed = document.getElementById('encontreiFeed')

    encontreiFeed.innerHTML = ''
    const petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];

    for (i = 0; i < petsAchados.length; i++) {
        encontreiFeed.innerHTML +=
            '<div class="card">' +
            '<h2 class="cardh2">' + petsAchados[i].nomePet + '</h2>' +
            '<p class="cardp">' + petsAchados[i].especiePet + '</p>' +
            '<p class="cardp">' + petsAchados[i].racaPet + '</p>' +
            '<p class="cardp">' + petsAchados[i].comentarioPet + '</p>' +
            `<img src="${petsAchados[i].fotoPet64}" alt="" class="cardimg">` +
            '<p class="cardp">' + `<button onclick="deletarAnimalAchado(${petsAchados[i].id})" class="cardb" >Encontrei esse Pet</button> ` + '</p>' +
            '<div>'
    }
}

mostrarTodos()

function deletarAnimalAchado(id) {
    let confirmar = confirm('Se você confirmar e não for verdade, o pet não poderá mais retornar pro seu lar!')
    let index = -1
    let petsAchados = JSON.parse(localStorage.getItem('petsAchados'))

    if (confirmar) {
        for (i = 0; i < petsAchados.length; i++) {
            if (petsAchados[i].id === id) {
                index = i;
            }
        }
        console.log(index)
        if (index != -1) {
            petsAchados.splice(index, 1)
            localStorage.setItem('petsAchados', JSON.stringify(petsAchados))
            window.location.reload()
        }
    }
}
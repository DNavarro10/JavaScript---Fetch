'use strict'

// fetch y peticiones/ Apis rest

let div_user = document.querySelector("#usuarios");
let div_janet = document.querySelector("#janet");

let usuarios = [];


    getUsuario()
        .then(data => data.json())
        .then(user => {
            listadoUsuario(user.data);

            return getJanet();
        })
        .then(data => data.json())
        .then(janet => {
            printJanet(janet.data);

            return getInfo();
        })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.log(error);
        });

function getUsuario() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function listadoUsuario(usuarios) {

    usuarios.map((user, i) => {
        let nombre = document.createElement('h5');


        nombre.innerHTML = ` ${i} - ${user.first_name} ${user.last_name}`;

        div_user.appendChild(nombre);

        //no mostrar load
        document.querySelector(".load").style.display = 'none';
    });

};

function printJanet(user) {

    let nombre = document.createElement('h5');
    let avatar = document.createElement('img');

    nombre.innerHTML = `${user.first_name} ${user.last_name}`;
    //imagen
    avatar.src = user.avatar;
    avatar.width = '120';
    avatar.height = '100';

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    //no mostrar load
    document.querySelector("#janet .load").style.display = 'none';
};

function getInfo() {
    let profesor = {
        nombre: 'Rictor',
        apellido: 'Robles',
        url: 'https://victorrobles.web.es'
    };

    return new Promise((resolve, reject) => {

        let profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != 'string') return reject('Error')

        return resolve(profesor_string);
    });

}


'use strict'

// fetch y peticiones/ Apis rest

    let div_user = document.querySelector("#usuarios");
    let usuarios = [];

    fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(user => {
            usuarios = user.data;
            console.log(usuarios);

            usuarios.map((user, i) => {
                let nombre = document.createElement('h5');


                nombre.innerHTML = ` ${i} - ${user.first_name} ${user.last_name}`;

                div_user.appendChild(nombre);

                //no mostrar load
                document.querySelector(".load").style.display = 'none';
            });
        });



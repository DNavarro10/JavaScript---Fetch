'use strict'

// fetch y peticiones/ Apis rest
let div_user = document.querySelector("#usuarios");
let usuarios = [];

fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(user =>{
    usuarios =  user.data;
    console.log(usuarios);

    usuarios.map ((user, i) => {
        let nombre = document.createElement('h4');


        nombre.innerHTML = i + user.first_name + " " + user.last_name;
        console.log(div_user);
        div_user.append(nombre);
        console.log(div_user);
    });
});
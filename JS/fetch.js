'use strict'

// fetch y peticiones/ Apis rest
let usuario = [];

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then( user =>{
    usuario =  user[0].name;
    console.log(usuario)
});
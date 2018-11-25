import React from 'react'

import guide from '../../guide.md'
import Logo from '../../assets/img/logo.svg'

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}
/*
var r = require('rethinkdb')

var connection = null;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

for (var i = 0, len = 100; i < len; i++) {
  r.table("transacciones").insert({
    "idUser": randomInt(0, 3),
    "dia": randomInt(1, 31),
    "mes": randomInt(0, 12),
    "ano": randomInt(2000, 2017),
    "cantidad": randomInt(1, 1000),
    "preciopa": randomInt(1, 10000)
}).run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
})

}
var lista = r.table('user').run(connection)*/
//var mysql = require('mysql');
/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: ""
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

/*
for (var i = 0, len = 50; i < len; i++) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
    }
  }
}
*/
const Home = () => {


  return (
    <div class="aurora-outer">
      <div class="aurora-inner">
        <h1>HacKnow</h1>

        <p><img id="logo" alt="logo" src={Logo}/>Es una aplicación web que permite obtener informacion financiera para el interes del usuario.
        </p>
        <h2>Objetivo</h2>
        <p>
        Proponer una solución para maantener siempre actualizado el perfil de riesgo de un cliente
        de una institucion financiera y poder hacer una gestion activa de sus activos, presentándole
        mejores oportunidades de inversion.
        </p>
        <h2>Proposito</h2>
        <p>
        Proponer una solución para maantener siempre actualizado el perfil de riesgo de un cliente
        de una institucion financiera y poder hacer una gestion activa de sus activos, presentándole
        mejores oportunidades de inversion.
        </p>
        <p>{ }</p>
      </div>
    </div>
  )
}

export default Home

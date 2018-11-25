import React from 'react'
import { connect } from 'react-redux'

const Dashboard = ({authData}) => {
  console.log('DASHBOARD RENDERING', authData);

  const { inversionista, verified } = authData || {}
  function clasificador(inversionista) {
    var sco_edad=[0,6,14,20]
  
    var conoce=['alto','medio','limitado','no']
    var sco_conoce=[0,2,4,6]
  
    var activo=['inter','accion','bono','nunca']
    var sco_activo=[0,3,5,10]
  
    var ingreso=['fijo','mixto','variable']
    var sco_ing=[0,1,2]
  
    var sco_fam=[0,1,2]

    var edad = parseInt(inversionista["edad"])
    var conocimiento = inversionista["conocimientoDeInversionista"]
    var actividad = inversionista["tipoUltimaInversion"]
    var ingresoY = inversionista["ingresoMensual"]
    var familia = parseInt(inversionista["ingresoFamiliar"])

    var inv=[inversionista["nombre"],inversionista["sexo"],edad,conocimiento,actividad,ingresoY,familia]
    var a=0
  
    if(inv[2] <= 35){
        a=a+sco_edad[0]
    }else if( inv[2] >= 36 && inv[2] <= 45){
        a = a + sco_edad[1]
    }else if( inv[2] >= 46 && inv[2] <= 60){
        a = a + sco_edad[2]
    }else{
        a = a + sco_edad[3]
    }
    console.log(a)
    //segundo
    if( inv[3]==conoce[0])
    {
        a = a + sco_conoce[0]
    } else if( inv[3]==conoce[1]){
      a = a + sco_conoce[1]
    } else if( inv[3]==conoce[2]){
      a = a + sco_conoce[2]
    } else if( inv[3]==conoce[3]){
      a = a + sco_conoce[3]
    }
    console.log(a)
    //tercero
    if( inv[4]==activo[0]){
        a = a + sco_activo[0]
    } else if( inv[4]==activo[1]){
      a = a + sco_activo[1]
    } else if( inv[4]==activo[2]){
      a = a + sco_activo[2]
    } else if( inv[4]==activo[3]) {
      a = a + sco_activo[3]
    }
    console.log(a)
    //cuarto
    if( inv[5]==ingreso[0]){
        a = a + sco_ing[0]
    } else if( inv[5] == ingreso[1]){
      a = a + sco_ing[1]
    } else if (inv[5] == ingreso[2]) {
      a = a + sco_ing[2]
    }
    //quinto
    if(inv[6] < 35){
        a = a + sco_fam[0]
    } else if( inv[6] >= 35 && inv[6] <= 50) {
      a = a + sco_fam[1]
    } else if( inv[6] >50){
      a = a + sco_fam[2]
    }

    if(a  <= 13){
      return "activo";
    } else if( a >= 14 && a <= 23) {
      return "moderado";
    } else {
      return "conservador";
    }
    
  }
  var sco_edad = clasificador(inversionista)

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <p><strong>La calificacion para : {inversionista ["nombre"]} es <code>{sco_edad}</code>!</strong></p>
        {verified && verified.map((attestation) =>
          <AttestationCard {...attestation} />
        )}
      </div>
    </div>
  )
}

const AttestationCard = ({claim, iss, sub}) => (
  <div className="card">
    <h4>subject: <code>{sub}</code></h4>
    <h4>issuer: <code>{iss}</code></h4>
    <ExpandJSON obj={claim} />
  </div>
)

const ExpandJSON = ({obj}) => {
  return (
    <ul className="key">
      {Object.keys(obj).map((key) => (
        <li><b>{key}: </b>
          {
            (Array.isArray(obj[key])) 
              ? '[' + obj[key].map((item) => <ExpandJSON obj={item} />) + ']'
              : (typeof obj[key] === 'object')
              ? <ExpandJSON obj={obj[key]} />
              : obj[key]
          }
        </li>
      ))}
    </ul>
  )
}

export default connect(
  (state) => ({
    authData: state.user.data
  })
)(Dashboard)

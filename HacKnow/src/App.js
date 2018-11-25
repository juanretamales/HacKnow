import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import { Home, Dashboard, UserIsAuthenticated, NavBar } from './components'
import { uport, handleDisclosure } from './uport'

// Styles
import './App.css'
import './assets/css/open-sans.css'

// Protect dashboard page with login
const AuthOnlyDashboard = UserIsAuthenticated(Dashboard)

const App = ({restoreUserData, loggedIn}) => {
  // Auto-login if credentials are cached in localStorage
  if (!loggedIn && uport.did) restoreUserData(uport.state)
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={AuthOnlyDashboard} />
        </Switch>
      </main>
    </div>
  )
}

export default connect(
// mapStateToProps
(state) => ({
loggedIn: !!state.user.data
}),
// mapDispatchToProps
(dispatch) => ({
restoreUserData: handleDisclosure(dispatch)
})
)(App)

function clasificador(inversionista) {
  var sco_edad=[0,6,14,20]

  var conoce=['alto','medio','limitado','no']
  var sco_conoce=[0,2,4,6]

  var activo=['inter','accion','bono','nunca']
  var sco_activo=[0,3,5,10]

  var ingreso=['fijo','mixto','variable']
  var sco_ing=[0,1,2]

  var sco_fam=[0,1,2]

  var inv=['JP','M',20,'limitado','inter','fijo', 80]
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
  //segundo
  if( inv[3] == conoce[0])
  {
      a = a + sco_conoce[0]
  } else if( inv[3] == conoce[1]){
  	a = a + sco_conoce[1]
  } else if( inv[3] == conoce[2]){
  	a = a + sco_conoce[2]
  } else if( inv[3] == conoce[3]){
  	a = a + sco_conoce[3]
  }
  //tercero
  if( inv[4] == activo[0]){
      a = a + sco_activo[0]
  } else if( inv[4] == activo[1]){
  	a = a + sco_activo[1]
  } else if( inv[4] == activo[2]){
  	a = a + sco_activo[2]
  } else if( inv[4] == activo[3]) {
  	a = a + sco_activo[3]
  }
  //cuarto
  if( inv[5] == ingreso[0]){
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
  return a
}

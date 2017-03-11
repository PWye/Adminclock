import React from 'react'
import { Router, browserHistory, Route, IndexRedirect } from 'react-router'
import Home from '../src/components/home'
import Login from '../src/components/login'
import App from '../src/components/app'

export default () => {
  return(
     <Router history = { browserHistory } >
        <Route path ='/' component = { App } >
          <indexRedirect to ='/home' />
          <Route path = '/home' component = { Home } />
          <Route path = '/login' component = { Login } />
        </Route>
      </Router>
    )
}

// import React from 'react'
// import { Router, browserHistory, Route, IndexRedirect } from 'react-router'
// import Home from '../src/components/home'
// import Login from '../src/components/login'

// export default () => {
//   return(
//      <Router history = { browserHistory } >
//         <Route path ='/' component = { Login } />
//           <indexRedirect to ='/home' />
//           <Route path = '/home' component = { Home } />
//       </Router>
//     )
// }





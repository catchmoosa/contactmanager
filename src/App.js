import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // does not work in github pages.
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import About from './components/pages/About';

// import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Contact is our first component

import { Provider } from './context';

class App extends Component {
  render() {
    // const name = 'Larry';
    // const showHello = false;
    // const showMath = true;
    // let math;
    // const num1 = 40;
    // const num2 = 30;

    // if (showMath) {
    //   math = (
    //     <h4>
    //       {num1} + {num2} = {num1 + num2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }

    return (
      <Provider>
        <Router>
          <div className="App">
            {/* {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math} */}

            <Header branding="Contact Manager" />
            <div className="container">
              {/* <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="333-333-3333"
          /> */}

              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       email: 'jdoe@gmail.com',
  //       phone: '555-555-5555'
  //     },
  //     {
  //       id: 2,
  //       name: 'Karen Williams',
  //       email: 'karen@gmail.com',
  //       phone: '222-222-2222'
  //     },
  //     {
  //       id: 3,
  //       name: 'Henry Johnson',
  //       email: 'henry@gmail.com',
  //       phone: '111-111-1111'
  //     }
  //   ]
  // };

  // If we are using conntext reducer, the below is unnecesary

  // deleteContact = id => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {/*replacing div with react fragment to reduce unneccessary tags*/}
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  //deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
    // If state is in same js file.
    // const { contacts } = this.state;

    // return (
    //   <React.Fragment>
    //     {/*replacing div with react fragment to reduce unneccessary tags*/}
    //     {contacts.map(contact => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;

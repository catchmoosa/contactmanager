import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // onshowClick = e => {
  //   this.setState({
  //     showContactInfo: !this.state.showContactInfo
  //   });
  // };

  // Above function done inline below.

  // onShowClick = (name, e) => {
  // console.log(name);
  // console.log(e.target);
  // };

  // Using async await
  // onDeleteClick = (id, dispatch) => {
  //   axios
  //     .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  // };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id }); // Dispatching even with 404 response
    }
  };

  // onDeleteClick = () => {
  //   this.props.deleteClickHandler();
  // };

  render() {
    const { id, name, email, phone } = this.props.contact; // Destructuring.
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  // onClick={this.onShowClick.bind(this, name)}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone Number: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>

      // <div className="card card-body mb-3">
      //   <h4>
      //     {name}{' '}
      //     <i
      //       // onClick={this.onShowClick.bind(this, name)}
      //       onClick={() =>
      //         this.setState({
      //           showContactInfo: !this.state.showContactInfo
      //         })
      //       }
      //       className="fas fa-sort-down"
      //       style={{ cursor: 'pointer' }}
      //     />
      //     <i
      //       className="fas fa-times"
      //       style={{ cursor: 'pointer', float: 'right', color: 'red' }}
      //       onClick={this.onDeleteClick}
      //     />
      //   </h4>
      //   {showContactInfo ? (
      //     <ul className="list-group">
      //       <li className="list-group-item">Email: {email}</li>
      //       <li className="list-group-item">Phone Number: {phone}</li>
      //     </ul>
      //   ) : null}
      // </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

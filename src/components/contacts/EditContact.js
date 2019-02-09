import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
//import uuid from 'uuid';  //jsonplaceholder creaates an id for user (like most databases)
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    //to get the id from the url thingy(also called parameters)
    const { id } = this.props.match.params;
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for Errors

    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          name: 'Email is required'
        }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          name: 'Phone is required'
        }
      });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `http://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear the state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/*Replaced with TextInputGroup*/}
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}

                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  {/* <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div> */}

                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    type="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  {/* <div className="form-group">
                    <label htmlFor="phone">Phone</label>

                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card mb-3">
    //     <div className="card-header">Add Contact</div>
    //     <div className="card-body">
    //       <form onSubmit={this.onSubmit}>
    //         <div className="form-group">
    //           <label htmlFor="name">Name</label>

    //           <input
    //             type="text"
    //             name="name"
    //             className="form-control form-control-lg"
    //             placeholder="Enter Name..."
    //             value={name}
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>

    //           <input
    //             type="email"
    //             name="email"
    //             className="form-control form-control-lg"
    //             placeholder="Enter Email..."
    //             value={email}
    //             onChange={this.onChange}
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="phone">Phone</label>

    //           <input
    //             type="text"
    //             name="phone"
    //             className="form-control form-control-lg"
    //             placeholder="Enter Phone..."
    //             value={phone}
    //             onChange={this.onChange}
    //           />
    //         </div>

    //         <input
    //           type="submit"
    //           value="Add Contact"
    //           className="btn btn-block"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // );
  }
}

export default EditContact;

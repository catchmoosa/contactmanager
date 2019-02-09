import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
//import uuid from 'uuid';  //jsonplaceholder creaates an id for user (like most databases)
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

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

    const newContact = {
      //id: uuid()
      name, // If key and value are same, i.e name: name, we can replace it by typing just 'name'
      email,
      phone
    };

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // axios
    //   .post(`http://10.0.34.28:6081/like`, newContact)
    //   .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

    // dispatch({
    //   type: 'ADD_CONTACT',
    //   payload: newContact
    // });

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
              <div className="card-header">Add Contact</div>
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
                    value="Add Contact"
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

export default AddContact;

import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap'
import Store from './storeComponent/addStoreItem.jsx'
import './App.css';

import firebase from './firebase'

// firebase.firestore().collection('times').add({
//     title : 'Rubiks\'s Cube',
//     time_seconds : 45
// })

function App() {
  return (
    <div className="App">
       <Navbar dark color='success'>
          <div className='container justify-content-center'>
            <NavbarBrand>
              <h2>Add Store Items</h2>
            </NavbarBrand>
          </div>
        </Navbar>
        <Store />
    </div>
  );
}

export default App;

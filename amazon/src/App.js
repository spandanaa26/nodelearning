import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import Dropdown from './components/Dropdown';

//import {register} from './components/Register';
import {LoginComponent} from './components/Login';
import {RegisterComponent} from './components/Register';
const App=()=>
{
    const companyName='Pega Systems';
            return <div>
                <Header title={companyName} />
               
                <h1>welcome</h1>

                
                <Footer />

                < LoginComponent />
                < RegisterComponent />
                </div>; 
            
};
export default App;
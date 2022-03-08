import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Footer from './components/Footer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  return (
    <div>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AaGHiT6kvUSyBteicuIBmc9nGPhMshi7XgPXBI3SIj98aploed1bK-sNLTGmco8xMfrKuJaG7P9zq5_d',
        }}
      >
        <Navbar />
        <Routes />
        <Footer />
      </PayPalScriptProvider>
    </div>
  );
};

export default App;

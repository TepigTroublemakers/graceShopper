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
            'AcNZT4fSMKw3L_bEAA7RthimRSkhhXmsnkODnc3ubv-4sCi5bHyu6Xrwdhqgr1MTGNbSCfld9mnrVvz2',
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

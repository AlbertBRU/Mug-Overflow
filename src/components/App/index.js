// == Import
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import FAQ from '../FAQ/faq';
// import Concept from '../Concept/concept';
import CGU from '../CGU/cgu';
import Product from '../Product/product';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<CreateAccount />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CGU" element={<CGU />} />
        
        {/* <Route path="/concept" element={<Concept />} /> */}
        <Route path="/produit" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;

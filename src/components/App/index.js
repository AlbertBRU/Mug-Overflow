// == Import
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import FAQ from '../FAQ/faq';
import LegalNotice from '../MentionsLegales/mentionsLegales';
import CGU from '../CGU/cgu';

import Contact from '../Contact/contact';
import Concept from '../Concept/concept';
import Product from '../Product/product';
import Profile from '../Profile/profile';
import Category from '../Categories/categories';

import './styles.scss';

// == Composant
function App() {
  const isLogged = useSelector((state) => state.user.logged);
  console.log(isLogged);
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<CreateAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CGU" element={<CGU />} />
        {/* <Route path="/concept" element={<Concept />} /> */}
        <Route path="/concept" element={<Concept />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/produit" element={<Product />} />
        <Route path="/profil" element={<Profile />} />c        
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;

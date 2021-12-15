import { Link } from 'react-router-dom';
import './Layout.css';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';


export default function Layout({ currentUser, handleLogout, children }) {
  return (
    <div className="Layout-div">

      <Nav 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      <br/>
      {children}
      
      <Footer />
    </div>
  );
}



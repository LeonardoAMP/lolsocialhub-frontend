import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar  mb-4 static-top shadow">
          <a className="navbar-brand" href="/">LoLSocialHub</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-md-center text-left">
              <li className="nav-item">
                <Link className="nav-link" to="/Unirme">Unirme</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Nosotros/">Nosotros</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <li className="nav-item"><Link className="nav-link" to="https://www.facebook.com/LoLSocialHub/"><i className="fab fa-facebook-f"></i></Link> </li>
            <li className="nav-item"><Link className="nav-link" to="#"><i className="fab fa-twitter"></i></Link> </li>
        </ul>
          </div>
        </nav>
    );
}

export default Header;
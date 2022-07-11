import { Link } from 'react-router-dom';

const Nosotros = () => {
  return (
    <div id="contenidito" className="container-fluid" data-ng-app="SHubApp">
      <h1 className="h3 mb-1 text-gray-800">Acerca de nosotros</h1>
      <p className="mb-4">
        Somos una iniciativa competitiva para los jugadores de League of Legends
        en La Romana e interesados.
      </p>
      <p>
        {" "}
        Estamos compuestos por 4 casas o bandos que buscan competir entre ellas
        en torneos, <i>scrims</i> y demás actividades con el fin de crear una
        comunidad competitiva de jugadores que busquen mejorar en equipo e
        interactuar con otros jugadores alcanzando metas en común dentro de una
        casa competitiva.
      </p>
      <br />

      <h2 className="mb-2">Las Casas</h2>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-beholden text-center">
            <div className="card-body">
              <h3 className="mb-3">Beholden Knights</h3>
              <p>Lider: DeepBlaze</p>
              <img className="img-fluid" src="/Utilidades/img/casas/beholden.png" />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-primary text-center">
            <div className="card-body">
              <h3 className="mb-3">Kimi rey del yani</h3>
              <p>Lider: Supraga</p>
              <img className="img-fluid" src="/Utilidades/img/casas/missing.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-danger text-center">
            <div className="card-body">
              <h3 className="mb-3">Greatness</h3>
              <p>Lider: F4Vip</p>
              <img
                className="img-fluid"
                src="/Utilidades/img/casas/greatness.jpg"
              />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-bjg text-center">
            <div className="card-body">
              <h3 className="mb-3">Black Jack</h3>
              <p>Lider: Mr Talan</p>
              <img className="img-fluid" src="/Utilidades/img/casas/bjg.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-olimpo text-center">
            <div className="card-body">
              <h3 className="mb-3">Dark Knights</h3>
              <p>Lider: Sousuk3</p>
              <img className="img-fluid" src="/Utilidades/img/casas/missing.png" />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card mb-4 py-3 border-left-butoski text-center">
            <div className="card-body">
              <h3 className="mb-3">Los Buttowski</h3>
              <p>Lider: MofongoAsesino</p>
              <img className="img-fluid" src="/Utilidades/img/casas/butoski.jpeg" />
            </div>
          </div>
        </div>
      </div>

      <p>
        ¿Te interesa unirte? ¡pulsa el siguiente boton, indicanos tu nombre de
        invocador, rol preferido y casa en la que quieras participar!, luego
        ponte en contacto con el lider de la casa correspondiente y estaras
        listo para participar.
      </p>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Link
            style={{color: "white"}}
            className="btn btn-primary btn-block"
            to="/Unirme/"
          >
            Unirme
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Nosotros;

import Card from '../components/Card';

const NewSummoner = () => {
  return (
    <div class="row">
      <div class="col-md-5">
        <Card title="Invocador">
          <form method="post" action="/AddToHubP/">
            <div class="form-group">
              <label for="sname">Nombre de invocador</label>
              <input
                required=""
                min="3"
                id="sname"
                name="sname"
                type="text"
                className="form-control"
                placeholder="Nombre de invocador"
              />
              <small></small>
            </div>
            <div class="form-group">
              <label for="posicion">Posición preferida</label>
              <select
                required=""
                className="form-control"
                id="posicion"
                name="posicion"
              >
                <option value="">Seleccione una opcion</option>
                <option value="1">Top</option>
                <option value="2">Jungle</option>
                <option value="3">Mid</option>
                <option value="4">Bot</option>
                <option value="5">Soporte</option>
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Someter"
            />
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewSummoner;

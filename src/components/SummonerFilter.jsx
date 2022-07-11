import {useState} from 'react'

const SummonerFilter = (props) => {
  const [nombre, setNombre] = useState("");
  const [tier, setTier] = useState(0);
  return (
  <>
    <div className="row">
      <div className="col-12 d-none d-sm-block">
        <input
          style={{borderRadius: "15px", width: "32%",  marginRight: "5px"}}
          type="text"
          className="form-control float-left input-sm ng-pristine ng-valid ng-touched"
          placeholder="Invocador..."
        />
        <select
          style={{borderRadius: "15px", width: "32%",  marginRight: "5px"}}
          className="form-control float-left input-sm ng-pristine ng-untouched ng-valid"
        >
          <option value="0">Tier</option>
          <option value="PROVISIONAL">PROVISIONAL</option>
          <option value="IRON">IRON</option>
          <option value="BRONZE">BRONZE</option>
          <option value="SILVER">SILVER</option>
          <option value="GOLD">GOLD</option>
          <option value="PLATINUM">PLATINUM</option>
          <option value="DIAMOND">DIAMOND</option>
          <option value="MASTER">MASTER</option>
          <option value="GRANDMASTER">GRANDMASTER</option>
          <option value="CHALLENGER">CHALLENGER</option>
        </select>
      </div>
      <div className="col-12 col-sm-8 d-block d-sm-none">
        <select
          style={{borderRadius: "15px", width: "49%"}}
          className="form-control float-right input-sm ng-pristine ng-untouched ng-valid"
        >
          <option value="0">Tier</option>
          <option value="PROVISIONAL">PROVISIONAL</option>
          <option value="IRON">IRON</option>
          <option value="BRONZE">BRONZE</option>
          <option value="SILVER">SILVER</option>
          <option value="GOLD">GOLD</option>
          <option value="PLATINUM">PLATINUM</option>
          <option value="DIAMOND">DIAMOND</option>
          <option value="MASTER">MASTER</option>
          <option value="GRANDMASTER">GRANDMASTER</option>
          <option value="CHALLENGER">CHALLENGER</option>
        </select>
        <input
          style={{borderRadius: "15px", width: "49%"}}
          type="text"
          className="form-control float-left input-sm ng-pristine ng-untouched ng-valid"
          placeholder="Buscar"
        />
      </div>
    </div>
  </>);
};

export default SummonerFilter;

import SummonerItem from "./SummonerItem";

const SummonerList = (props) => {
  return (
    <table class="table table-bordered mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Invocador</th>
          <th>Nivel</th>
          <th>Liga</th>
        </tr>
      </thead>
      <tbody>
        {props.summoners.map((summoner) => (
          <SummonerItem
            key={summoner.rank}
            rank={summoner.rank}
            summonerName={summoner.summonerName}
            level={summoner.level}
            league={summoner.league}
            division={summoner.division}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SummonerList;

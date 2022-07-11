import SummonerFilter from '../components/SummonerFilter';
import SummonerList from '../components/SummonerList';
import Card from '../components/Card';
const DUMMY_LEAGUES = [
    'GOLD','SILVER','PLATINUM','IRON'
]
  
const DUMMY_SUMMONERS = [
    {
      rank:1,
      summonerName: 'DeepBlaze',
      level: '500',
      division: 'I',
      league: 'DIAMOND'    
    },
    {
      rank:2,
      summonerName: 'Zuchl',
      level: '300',
      division: 'II',
      league: 'IRON'    
    },
    {
      rank:3,
      summonerName: 'Chuckysin',
      level: '200',
      division: 'IV',
      league: 'GOLD'    
    }
]
const Home = () => {
    return (
    <div className="row">
        <div className="col-md-9 col-sx-12">
            <Card title="Ranking">
                <SummonerFilter leagues={DUMMY_LEAGUES}/>
                <SummonerList summoners={DUMMY_SUMMONERS}/>
            </Card>
        </div>
    </div>);
}

export default Home;
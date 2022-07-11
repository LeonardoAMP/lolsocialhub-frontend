const SummonerItem = props => {
    return (
        <tr>
            <td>{props.rank}</td>
            <td>{props.summonerName}</td>
            <td>{props.level}</td>
            <td>{props.league} {props.division}</td>
        </tr>
    );
}

export default SummonerItem;
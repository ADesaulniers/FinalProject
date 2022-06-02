import styled from "styled-components";

const PlayerStats = () => {


    // var options = {
    //     uri: 'https://api.brawlstars.com/v1/players/%23${PlayerId}',
    //     qs: {
    //         access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    //     },
    //     headers: {
    //         'User-Agent': 'Request-Promise'
    //     },
    //     json: true // Automatically parses the JSON string in the response
    // };

  return (
    <Div>
      <Img src={"/images/16000040.png"} />
      <StatsDiv>
        <Stats>STATS HERE</Stats>
        <LeagueRankDiv>
        <RankImg src={"/images/solo_league.d5f730dfa4be7b386ac05cc200d5ab36.png"}/>
        <p> Stats </p>
        <RankImg src={"/images/team_league.e1f08f2616b550db0214535f0439d393.png"}/>
        <p> Stats </p>
        </LeagueRankDiv>
      </StatsDiv>
    </Div>
  );
};

const Img = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const RankImg = styled.img`
    width: 40px;
    display: inline-block;
`

const Stats = styled.p`
padding: 20px 0 0 0;
font-weight: bolder;
`

const LeagueRankDiv = styled.div`
    /* display: flex; */
    /* position: relative; */
`;


const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
`;

const StatsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  justify-content: center;
  align-items: center;
`;

export default PlayerStats;



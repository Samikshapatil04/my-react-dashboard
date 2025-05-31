import React from "react";
import "./CricketUI.css";

class MyComponent extends React.Component {
    constructor(props) {
      super(props); // ✅ Now valid
      this.state = {
        indianTeam: [
        { id: 1, name: "Virat Kohli", img: "https://images.mykhel.com/webp/images/cricket/players/8/3788.jpg", runs: 0 },
        { id: 2, name: "Rohit Sharma", img: "https://d2l63a9diffym2.cloudfront.net/players/MUsPW20sBBY581QXSyjLBjw5BHq3ezoiVnwWkz6I.jpeg", runs: 0 },
        { id: 3, name: "Jasprit Bumrah", img: "https://i.pinimg.com/564x/c7/c9/b7/c7c9b7fc845c2714ed5030be12f5fbbb.jpg", runs: 0 },
        { id: 4, name: "Hardik Pandya", img: "https://parimatchnews.com/wp-content/uploads/2020/11/Hardik-Pandya.png", runs: 0 },
        { id: 5, name: "MS Dhoni", img: "https://d2l63a9diffym2.cloudfront.net/players/ZPrqrXIJ4cDHp2sSTo93948lKFfmmBJJIdgWQwTE.jpg", runs: 0 },
        { id: 6, name: "Shreyas Iyer", img: "https://i.pinimg.com/736x/fd/e6/b2/fde6b29e7299625029dc5afa8412e2ea.jpg", runs:0 },
        { id: 7, name: "Shreyas Iyer", img: "https://images.mykhel.com/webp/images/cricket/players/0/7110.jpg",runs:0},
        { id: 8, name: "Ravindra Jadeja", img: "https://cricclubs.com/documentsRep/profilePics/a7c304ce-5c09-4ad9-b495-e9f756ed756d.png",runs:0},
        { id: 9, name: "Suryakumar Yadav", img: "https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/11803.png?v=4.45&w=400",runs:0},
        { id: 10, name: "Shubman Gill", img: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/shubman-gill.png",runs:0},
        { id: 11, name: "Sourav Ganguly", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErLhJiC2DWo3Y2TLuZ6REsO9BXVNaKnuKyQ&s",runs:0},
      ],
      australianTeam: [
        { id: 1, name: "Glenn Maxwell", img: "https://static-files.cricket-australia.pulselive.com/headshots/288/591-camedia.png", runs: 0 },
        { id: 2, name: "Travis Head", img: "https://thebiodiary.com/uploads/bio/Travis_Head.webp", runs: 0 },
        { id: 3, name: "Marcus Stoinis", img: "https://images.mykhel.com/webp/images/cricket/players/7/5957.jpg", runs: 0 },
        { id: 4, name: "Mitchell Starc", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNCE6vFxOXQbymghJRiHOi_13ReFR-dL3UyYTtyi7Oul1PUGgum0jQZ0xUZVLQrQXCuQ&usqp=CAU", runs: 0 },
        { id: 5, name: "Mitchell Marsh", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHd9mWETpaF8b2svbZmcwC3-36D_CvQ71wNxLLZUDhPizWGNcZ7MOpKFhheKCPU5CDw4&usqp=CAU", runs: 0 },
        { id: 6, name: "Sam Konstas", img: "https://www.theweek.in/content/dam/week/week/web-stories/sports/images/2024/10/14/sam-konstas-thumb.jpg",runs:0},
        { id: 7, name: "Josh Inglis", img: "https://static-files.cricket-australia.pulselive.com/headshots/440/1151-shield.png",runs:0},
        { id: 8, name: "Adam Zampa", img: "https://i.cdn.newsbytesapp.com/sports/players/profile/adam-zampa.png",runs:0},
        { id: 9, name: "Alex Carey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkN9-6Wn4vVI_5foOOe4DoUHV55jsSj4tM9oKYP1lxkxKa3vy0Y1SNWR5M1JaQuOJQ2Fs&usqp=CAU",runs:0},
        { id: 10, name: "Marcus Stoinis", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFKzQsPkmvKu4J9Dvb7cqARHis0tT13TcPUrsDdIdxDhqiayLvX9lI7n6euLm1LxwZHk&usqp=CAU",runs:0},
        { id: 11, name: "Matt Short", img: "https://d13ir53smqqeyp.cloudfront.net/player-images/Men/Men2024/1649.png",runs:0},
      ],
      indianTeamTotal: 0,
      australianTeamTotal: 0,
    };
  }

  // Increment runs for a player and update the team's total runs
  handleRunClick = (team, id) => {
    this.setState((prevState) => {
      const updatedTeam = prevState[team].map((player) => {
        if (player.id === id) {
          return { ...player, runs: player.runs + 1 };
        }
        return player;
      });

      const teamTotalKey = team === "indianTeam" ? "indianTeamTotal" : "australianTeamTotal";
      const newTeamTotal = prevState[team + "Total"] + 1;

      return {
        [team]: updatedTeam,
        [teamTotalKey]: newTeamTotal,
      };
    });
  };

  // Remove player card on "Wicket" click
  handleWicketClick = (team, id) => {
    this.setState((prevState) => ({
      [team]: prevState[team].filter((player) => player.id !== id),
    }));
  };

  renderDivision = (team, players, totalRuns) => {
    return (
      <div className="team">
        <h2>{team === "indianTeam" ? "Indian Cricket Team" : "Australian Cricket Team"}</h2>
        <h3>Total Runs: {totalRuns}</h3>
        <div className="division-container">
          {players.map((player) => (
            <div key={player.id} className="division">
              <div className="img-box">
                <img className="img" src={player.img} alt={player.name} />
              </div>
              <div className="player-info">
                <h3 className="player-info">{player.name}</h3>
                <p>Runs: {player.runs}</p>
              </div>
              <div className="button-box">
                <button className="button" onClick={() => this.handleRunClick(team, player.id)}>
                  Run
                </button>
                <button className="button" onClick={() => this.handleWicketClick(team, player.id)}>
                  Wicket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { indianTeam, australianTeam, indianTeamTotal, australianTeamTotal } = this.state;

    return (
      <div className="container">
        <div className="background">
          <h1>Cricket Match</h1>
        </div>
        <div className="teams" style={{ display: "flex", justifyContent: "space-between" }}>
          {this.renderDivision("indianTeam", indianTeam, indianTeamTotal)}
          {this.renderDivision("australianTeam", australianTeam, australianTeamTotal)}
        </div>
      </div>
    );
  }
}

export default MyComponent;

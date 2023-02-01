import { Component } from "react";
import Headers from "./Headers";
import Clubs from "./Clubs";
import Options from "./Options";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcane: {
        name: "Club Arcane",
        init: 0,
        max: 100,
        half: 70,
        msg: "Club Arcane",
        color: "#00ffff",
      },
      underground: {
        name: "Club Underground",
        init: 0,
        max: 50,
        half: 30,
        msg: "Club Underground",
        color: "#00ffff",
      },
      soda: {
        name: "Club Soda",
        init: 0,
        max: 20,
        half: 12,
        msg: "lub Soda",
        color: "#00ffff",
      },
      paradisio: {
        name: "Club Paradisio",
        init: 0,
        max: 52,
        half: 32,
        msg: "Club Paradisio",
        color: "#00ffff",
      },
    };
    this.clubStatus = this.clubStatus.bind(this);
  }

  clubStatus(n, club_name) {
    
    if (club_name !== "") {
      let club = this.state[club_name];
      let occupancy = club.init;
      

      
      if (occupancy + n >= 0) {
        
        occupancy = club.init = occupancy + n;
        console.log(club.name + " occupancy: " + occupancy);

        
        let color = "#00ffff";
        let msg = "";

        if (occupancy >= club.max) {
          color = "#c52223";
          msg = "\n\n\nNo-one allowed in!";
        } else if (occupancy >= club.half) {
          color = "#e9ec2d";
          msg = "\n\n\nWarn the bouncers...";
        } else if (occupancy > 0) {
          msg = "\n\n\nWelcome";
        }

        
        club.color = color;
        club.msg = club.name + msg;
        this.setState({ club_name: club });
      }
    }
  }

  render() {
    return (
      <div>
        <Headers />
        <Clubs data={this.state} />
        <Options callback={this.clubStatus} />
      </div>
    );
  }
}

export default Main;

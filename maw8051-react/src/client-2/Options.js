import { Component } from "react";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { current_club: "" };
  }

  updateEvent(event) {
    let club_name = event.target.value;
    this.setState({
      current_club: club_name,
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Segoe UI",
        }}
      >
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
          }}
          onChange={this.updateEvent.bind(this)}
        >
          <input type="radio" name="club_selector" id="1" value="arcane" />
          Club Arcane<br></br>
          <input type="radio" name="club_selector" id="2" value="paradisio" />
          Club Paradisio<br></br>
          <input type="radio" name="club_selector" id="3" value="underground" />
          Club Underground<br></br>
          <input type="radio" name="club_selector" id="4" value="soda" />
          Club Soda<br></br>
        </div>
        <div>
          <input
            className="button"
            type="button"
            value="+"
            onClick={() => this.props.callback(1, this.state.current_club)}
          ></input>
          <input
            className="button"
            type="button"
            value="-"
            onClick={() => this.props.callback(-1, this.state.current_club)}
          ></input>
        </div>
      </div>
    );
  }
}

export default Options;

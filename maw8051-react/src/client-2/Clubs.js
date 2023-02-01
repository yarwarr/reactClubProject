import React, { Component } from "react";

export default class Clubs extends Component {
  render() {
    return (
      <div class="labels">
        <div class="labels1">
          <div
            class="Arcane"
            style={{ backgroundColor: this.props.data.arcane.color }}
          >
            {this.props.data.arcane.msg}
          </div>
          <div
            class="Paradisio"
            style={{ backgroundColor: this.props.data.paradisio.color }}
          >
            {this.props.data.paradisio.msg}
          </div>
          <div
            class="Underground"
            style={{ backgroundColor: this.props.data.underground.color }}
          >
            {this.props.data.underground.msg}
          </div>
          <div
            class="Soda"
            style={{ backgroundColor: this.props.data.soda.color }}
          >
            C{this.props.data.soda.msg}
          </div>
        </div>
        <div class="labels2">
          <label class="ArcaneCount" for="display">
            {this.props.data.arcane.init}
          </label>
          <label class="ParadisioCount" for="display">
            {this.props.data.paradisio.init}
          </label>
          <label class="UndergroundCount" for="display">
            {this.props.data.underground.init}
          </label>
          <label class="SodaCount" for="display">
            {this.props.data.soda.init}
          </label>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Search extends Component {

    render(){
        return(
            <div>
                <input type="text" placeholder="Search for Club" onChange={this.props.onChange}/>
                
            </div>
        )
    }
}
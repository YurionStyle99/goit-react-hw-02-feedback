import React, { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodClick = ()=>{
  this.setState(prevState => {
    return{
      good: prevState.good + 1,
    }
  })
    };
    neutralClick = ()=>{
      console.log("q")
    };
    badClick = ()=>{
      console.log("q")
    };
  render (){


    return (
      <>
<h1>Please leave feedback</h1>
<button type="button" onClick={this.goodClick}>Good</button>
<button type="button" onClick={this.neutralClick}>Neutral</button>
<button type="button" onClick={this.badClick}>Bad</button>
<h2>Statistics</h2>
<p>Good: {this.state.good} </p>
<p>Neutral: {this.state.neutral}</p>
<p>Bad: {this.state.bad}</p>
      </>
    )
  }
}
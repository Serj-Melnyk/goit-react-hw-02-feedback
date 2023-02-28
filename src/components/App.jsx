import { Component } from "react"
import { AddFedback } from "./AddFeedback/AddFeedback";
import { GlobalStyle } from "./GlobalStyle";

// import data from "./feedback.json";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onOptionGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
      
  } ));
  };

    onOptionNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
      
  } ));
    };
  
    onOptionBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
      
  } ));
  };
  



  render() {


    const {good ,neutral , bad} = this.state



    return (
         <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <AddFedback good={good}
          neutral={neutral}
          bad={bad}
        
          options={this.onOptionGood}
          onOptionNeutral={this.onOptionNeutral}
          onOptionBad={this.onOptionBad}
        />
      

        <GlobalStyle/>
    </div>
     )
};

 
};




//============================
  //  <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework - 2 template
  //   </div>
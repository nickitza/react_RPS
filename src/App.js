import React from "react";
import { Container, Header } from "semantic-ui-react";
import OptionBox from "./components/OptionBox";
import paper from "./images/paper.jpg";
import rock from "./images/rock.jpg";
import scissors from "./images/scissors.jpg";
import Scorekeeper from "./components/Scorekeeper"

class App extends React.Component {
  state = { userChoice: "", compChoice: "", showOptions: true };

  optionClick = option => {
    this.setState({ userChoice: option, compChoice: this.getChoice() });
    this.removeOptions();
  };

  getChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let comp = choices[Math.floor(Math.random() * choices.length)];
    return comp;
  };

  removeOptions = () => {
    this.setState({ showOptions: false });
  };

  getWinner = () => {
    if (this.state.userChoice === "rock") {
      if (this.state.compChoice === "paper") {
        return <h1>Computer Wins With Paper</h1>
      } else if (this.state.compChoice === "scissors") {
        return <h1>Computer Chose Scissors - You Win</h1>
      } else 
        return <h1>Tie</h1>;
    } else if (this.state.userChoice === "paper") {
      if (this.state.compChoice === "scissors") {
        return <h1>Computer Wins With Scissors</h1>
      } else if (this.state.compChoice === "rock") {
        return <h1>Computer Chose Rock - You Win</h1>
      } else return <h1>Tie</h1>;
    } else if (this.state.userChoice === "scissors") {
      if (this.state.compChoice === "rock") {
        return <h1>Computer Wins With Rock</h1>
      } else if (this.state.compChoice === "paper") {
        return <h1>Computer Chose Paper - You Win</h1>
      } else return <h1>Tie</h1>;
    }
  };

  render() {
    
    return (
      <Container style={{ paddingTop: "2em" }}>
        <Header> ROCK PAPER SCISSORS </Header>
        <Header sub> with React </Header>
        <hr />
        {this.state.showOptions ? 
        ( <div style={{ display: "flex", justifyContent: 'space-around'  }}>
            <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
            <OptionBox name="paper" img={paper} optionClick={this.optionClick}/>
            <OptionBox name="scissors" img={scissors} optionClick={this.optionClick}/>
          </div>)
          :
          (this.getWinner())}


          <div style={{ display: "flex", justifyContent: 'space-between'}}>
            {/* {this.state.compChoice != "" && <OptionBox img={} name="compChoice">Computer Choice:</OptionBox>} */}
            <Scorekeeper name="Your" />
            <Scorekeeper name="Computer"/>
          </div>

      </Container>
    );
  }
}
export default App;

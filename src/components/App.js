import React from 'react';
import Header from './Header';
import NewDateForm from './Form/Form';
import Results from './Results/Results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weekday: "Monday",
      month: "January"
    };
  }

  weekDayChangeHandler = (event) => {
    //change state based on form input values
    this.setState({
      weekday: event.target.value
    });
  }

  monthChangeHandler = (event) => {
    this.setState({
      month: event.target.value
    });
  }

  render() {
    return (
        <React.Fragment>
            <NewDateForm weekdayChange={this.weekDayChangeHandler} monthChange={this.monthChangeHandler}/>
            <Header />
            <br />
            <Results weekday={this.state.weekday} month={this.state.month} /> 
        </React.Fragment>
    )
  }
}

export default App;
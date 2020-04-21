import React from 'react';
import Header from './Header';
import NewDateForm from './Form/Form'
import Results from './Results/Results';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <NewDateForm />
        <Results />
      </React.Fragment>
    )
  }
}

export default App;
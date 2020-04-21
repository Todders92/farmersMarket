import React from 'react';
import Header from './Header';
import NewDateForm from './Form/Form'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <NewDateForm />
      </React.Fragment>
    )
  }
}

export default App;
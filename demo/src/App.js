import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Hello from './Hello';

class App extends Component {

    render() {
      return (
        <div className="App">
          <Hello name="bruce" heroName="batman"/>
          <Greet name="clark" heroName="superman"/>
        </div>
      );
    }
}


export default App;

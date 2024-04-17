import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Hello from './Hello';
import Welcome from './components/Welcome';
import NewComp from './components/NewComp';
import Newcomp2 from './components/Newcomp2';
import HookCounter from './components/HookCounter';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';

class App extends Component {

    render() {
      return (
        <div className="App">
          {/* <Hello name="bruce" heroName="batman">
            <p>This is children props</p>
          </Hello>
          <Hello name="clark" heroName="superman">
            <button>action</button>
          </Hello>
          <Greet welcomemsg="nice to meet you"/>

          <Welcome name="bruce" heroName="batman"/>
          <Welcome name="clark" heroName="Superman"/>
          <Welcome name="diana" heroName="aquaman"/> */}
          {/* <Newcomp2 />
          <NewComp /> */}
          {/* <HookCounter /> */}
          {/* <HookCounterOne /> */}
          <HookMouse />
        </div>
      );
    }
}

export default App;

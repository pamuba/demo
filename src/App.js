import './App.css';
import {useState} from 'react'
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import ParentComp from './components/ParentComp';




function App() {
  //hooks  ver 16
  const [advice, setAdvice] = useState("")

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data.slip.advice)
    console.log(data.slip.advice)
  }

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <Greet/>
        <Welcome/> */}
        {/* <Hello/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>The children prop</p>
          <button>CLICK</button>
        </Greet>
        <Greet name="Clark" heroName="Superman"/>
        <Greet name="Diana" heroName="Wonderwomen"/> */}
        {/* <Welcome tech="ReactJS"/> */}
        {/* <Message></Message> */}
        {/* <Counter/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreetings/> */}
        {/* <NameList/> */}
        <ParentComp/>
      </header>
    </div>
  );
}

//JSX

export default App;

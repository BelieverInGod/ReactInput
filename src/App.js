import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}


class Field extends Component {
  render(){
    const holder = 'password';
    const styleFiled = {
      width: '300px',
      background: 'Yellow'
    };
      return <input
             placeholder={holder}
             type="text"
             style={styleFiled}/>
  }         
};

function Btn() {
  const text = 'Log in'
  const logged = true
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}

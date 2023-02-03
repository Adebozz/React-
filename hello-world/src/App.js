// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/functionClick'
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/UserGreeting';
import PersonList from './components/nameList';
import Stylesheet from './components/Stylesheet';
class App extends Component {
  render() {
  return (
    <div className="App">
      <Stylesheet />
      {/* <PersonList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind />
      <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
     {/* <Greet name= 'ade' job= 'Graphic Designer'/>
     <Greet name= 'adeboss' job= 'Senior dev'/>
     <Greet name= 'ademola' job= 'Computer Scientist'/>
     <Welcome name= 'Banji' job= 'Agba Dev'/>
     <Welcome />
     <Welcome /> */}
     {/* <Hello /> */}
     
    </div>
  );
  }
}

export default App;

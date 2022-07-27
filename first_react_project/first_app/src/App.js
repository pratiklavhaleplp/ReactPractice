import logo from './logo.svg';

import './App.css';
import FirstComponent from './Components/first-component'
import Revision from './Components/revision/revision';
// import MockReact from './Components/mock-interview-react';

function AppTest() {

  const valuesInParent = [{name : 'pratik', age: 26, phNumber : 9405909873},
  {name : 'ABC', age: 23, phNumber : 9405905473},
  {name : 'PQR', age: 25, phNumber : 9405948873},
  {name : 'XYZ', age: 28, phNumber : 9405459873}];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          REACT PRACTICE
          <Revision name = "pratik" age = "26"></Revision>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppTest;
















{/* <MeraFirstComponent ruthviktest = '' name = {valuesInParent[0].name} age = {valuesInParent[0].age} phNumber = {valuesInParent[0].phNumber}></MeraFirstComponent>
          <MeraFirstComponent name = {valuesInParent[1].name} age = {valuesInParent[1].age} phNumber = {valuesInParent[1].phNumber}></MeraFirstComponent>
          <MeraFirstComponent name = {valuesInParent[2].name} age = {valuesInParent[2].age} phNumber = {valuesInParent[2].phNumber}></MeraFirstComponent>
          <MeraFirstComponent name = {valuesInParent[3].name} age = {valuesInParent[3].age} phNumber = {valuesInParent[3].phNumber}></MeraFirstComponent> */}

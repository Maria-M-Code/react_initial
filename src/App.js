import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {


  state = {
    persons: [
      { name: "Maria", age: 35 }, 
      { name: "Alex", age: 14 }, 
      { name: "Max", age: 12 }, 

    ]

  }

  switchNameHandler =  () => {
    // console.log("Was clicked!")
    this.setState( {
      persons: [
        { name: "Robinson", age: 41 }, 
        { name: "Alex", age: 14 }, 
        { name: "Max", age: 12 }, 
      ]
    }

    )

  }
  
  render() {
    return (
    <div className="App">
        <h1>Hello Mary</h1>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name="Alex"> I am speak Franch</Person>
       
    </div>
  );  
  }

}

export default App;

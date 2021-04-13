import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        picture: 'e',
        name: 'r'
    }
  }
  updatePicture(value){
      this.setState({
        picture: value,
      })
  }
  updateName(value){
    this.setState({
      name: value,
    })
  }
  addFriend(){
    let friends = this.state.friends.slice();
    let friend = {
      picture: this.state.picture,
      name: this.state.name
    }
    friends.push(friend);
    this.setState({
      friends: friends
    })
    console.log(this.state.friends);
  }
  
  render() {
    const friends = this.state.friends.map(function(el, index){
      return (
      
      <div key={`friend=${index}-${el.name}`}>
        <img src={el.picture}></img>
        <span>{el.name}</span>
      </div>)
    })
    return (
      <div>
        <span>Picture:</span>
        <input onChange={(e)=>{this.updatePicture(e.target.value)}} value={this.state.picture}/>
        <img src="https://www.w3schools.com/images/w3schools_green.jpg"/>
        <span>Name:</span>
        <input onChange={(e)=>{this.updateName(e.target.value)}} value={this.state.name} />

        <button onClick={()=>{this.addFriend()}}>Add Friend</button>
        <div key={friends}>{friends}</div>
      </div>
      
    );
  }
}

export default App;

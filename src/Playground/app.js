import React from 'react';
import faker from 'faker';
//import data file to use
const UsersList = (props) => {
  return(
    <div>
      <h1> Found Users List</h1>
      <ul>
      {
        props.usersData.map((user, index) => {
          return <li key={index}> {user.name} </li>
        })
      }
      </ul>
    </div>
  )
}

const Counter = (props) => {
  return(
    <div>
      <h4> counter: {props.counter}</h4>
        <button className="inc-count-btn" onClick={
          () => props.increaseCounter()}> Increase Counter </button>
        <button className="dec-count-btn" onClick={
          () =>  props.decreaseCounter()}> Decrease Counter </button>
    </div>

  )
}

class App extends React.Component {

 state = {
   name: "Hannah",
   counter: 0,
   users: null,
   showCounter: true,
 }
 increaseCounter = this.increaseCounter.bind(this)
 decreaseCounter = this.decreaseCounter.bind(this)

 componentDidMount(){
   this.fetchUsersFromServer();
   const randomName = faker.name.firstName();
   const someProd = faker.commerce.product();
   alert(someProd);
   //this.setState({ customers: myData})
 }
 fetchUsersFromServer(){
   const users = [
      { name: "Doug", id: 1, },
      { name: "Hannah", id: 2, },
      { name: "Jette", id: 3, },
      { name: "Joseph", id: 4, },
    ]
    setTimeout(() => {
      this.setState({ users: users })
    }, 3000);
 }
 increaseCounter(){
   this.setState({counter: this.state.counter += 1})
 }
 decreaseCounter(){
   this.setState({counter: this.state.counter -= 1})
 }
toggleCounter(){
  this.setState({showCounter: !this.state.showCounter})
}

  render(){
    return(
      <div>
      <button
      className={this.state.showCounter ? "open-btn" : "close-btn"}
      onClick={()=> this.toggleCounter() }> {this.state.showCounter ? "hide" : "show"}
      </button>
          {
            this.state.showCounter
            ? <Counter
            counter={this.state.counter}
            increaseCounter={this.increaseCounter}
            decreaseCounter={this.decreaseCounter}
            />
            : null
          }
          {
            this.state.users
            ? <UsersList usersData={this.state.users} />
            : <h1> Users Being Loaded </h1>
          }
      </div>
    )
  }
}


export default App;

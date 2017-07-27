import React from 'react';
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

class App extends React.Component {

 state = {
   name: "Hannah",
   counter: 0,
   users: null,
 }
 componentDidMount(){
   this.fetchUsersFromServer()
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


  render(){
    return(
      <div>
        <h1>My name is: {this.state.name}</h1>
        <h4> counter: {this.state.counter}</h4>
        <button onClick={
          () => this.increaseCounter()}> Increase Counter </button>
        <button onClick={
          () =>  this.decreaseCounter()}> Decrease Counter </button>

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

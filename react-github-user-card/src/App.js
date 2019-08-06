import React from 'react';
import userCard from './Components/userCard'
import axios from 'axios'
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.userInfo();
  }

  userInfo = () => {
    axios.get('https://api.github.com/users/HannahMarieWieser')
    .then(person => {
        this.setState({ users : person.data})
        console.log(person)
    })
    .catch(err => {
        console.log(err)
    })

  }

  render(){
    return(
      <div>
        <h1>React Github UserCards</h1>
        {/* {this.state.users.map(user => {
          return <userCard info = {this.state.users}/>
        })} */}
        


      </div> 

    )
  }

}
export default App;

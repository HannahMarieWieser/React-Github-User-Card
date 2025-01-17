import React from 'react';
import UserCard from './Components/UserCard'
import axios from 'axios'
import './App.css';
import FollowersCard from './Components/FollowersCard'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      users: [],
      followers: []
    };
    
  }

  componentDidMount(){
    this.userInfo();

    axios.get('https://api.github.com/users/hannahmariewieser/followers')
    .then(follower => {
        this.setState({ followers : follower.data})
        console.log("follower", follower.data)
    })
    .catch(err => {
        console.log(err)
    })

  }

  userInfo = () => {
    axios.get('https://api.github.com/users/HannahMarieWieser')
    .then(person => {
        this.setState({ users : person.data})
        console.log("person", person.data)
    })
    .catch(err => {
        console.log(err)
    })

  }



  render(){
    //console.log("state-users", this.state.users)
    console.log("state-followers", this.state.followers)
    return(
      <div className='wholeapp' >
        <h1 className='title' >React Github UserCards</h1>

        <div className='grid' >
          <UserCard key = {this.state.users} info = {this.state.users}className='cards' />

          {this.state.followers.map(follow => {
            console.log("follow", follow)
            return <FollowersCard key={follow} info = {follow} className='cards'/>
          })}
        </div>

      </div> 

    )
  }

}
export default App;

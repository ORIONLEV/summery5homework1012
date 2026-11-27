import { Component } from 'react'
import data from './users.json'
import './App.css'
import UserList from './components/UserList/UserList'


class App extends Component{

  state = {
    users: data,
  }


  componentDidMount(){
    const saveData = window.localStorage.getItem("cards")

    if(saveData){
      this.setState({
        users:JSON.parse(saveData)
      })
    }else{
      this.setState({
        users:this.state.users
      })
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState.users.length !== this.state.users.length){
      window.localStorage.setItem("cards",JSON.stringify(this.state.users))
    }
  }

  handleDelete =(userID)=>{
    this.setState((prev) =>({
      users: prev.users.filter((user) => user.id!== userID),
    })
  )}

  render(){
    const{users}=this.state
    return(
      <>
        <UserList users={users} onDelete={this.handleDelete}/>
      </>
    )
  }
}


export default App

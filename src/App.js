import React from 'react';
import Header from "./components/Header"
import SearchButton from "./components/SearchButton"
import SearchBox from './components/SearchBox';
import CardContainer from './components/CardContainer';
import Card from './components/Card';



class App extends React.Component {

    constructor(){
        super();

        this.state = {
            userList:[],
            userName:[]
        }
    }

    getUsers = userName =>{
        const url =`https://api.github.com/search/users?q=${this.state.userName}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({userList:data['items']})
            console.log(this.state.userList)
        })
    }

    setUserName = e =>{
        this.setState({userName:e.target.value}
            )
        
    }

    render() {
        return (
            <div className="App">

                <Header />

                <SearchBox updateUserName={this.setUserName} />

                <SearchButton getUsers={this.getUsers}/>

                <CardContainer>
                    {
                        this.state.userList.map( user => 
                            <Card profile={user}/>
                        )
                    }
                </CardContainer>

            </div>
        );
    }
}

export default App;

import React from 'react';
import Header from "./components/Header"
import SearchButton from "./components/SearchButton"
import SearchBox from './components/SearchBox';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Spinner from "./components/Spinner"



class App extends React.Component {

    constructor() {
        super();

        this.state = {
            userList: [],
            userName: "",
            loading: false
        }
    }

    getUsersList = userName => {

        this.setState({ loading: true })
        const url = `https://api.github.com/search/users?q=${this.state.userName}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ userList: data['items'] })
                this.setState({ loading: false })

            })
    }

    setUserName = e => {
        this.setState({ userName: e.target.value }
        )

    }

    render() {
        return (
            <div className="App">

                <Header />

                <SearchBox updateUserName={this.setUserName} />

                <SearchButton getUsers={this.getUsersList} />

                {this.state.loading?<Spinner/>:

                <CardContainer>
                    {
                        this.state.userList.map(user =>
                            <Card profile={user} />
                        )
                    }
                </CardContainer>

                }

            </div>
        );
    }
}

export default App;

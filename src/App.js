import React from 'react';
import Header from "./components/Header"
import SearchButton from "./components/SearchButton"
import SearchBox from './components/SearchBox';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Spinner from "./components/Spinner"
import NotFoundText from './components/NotFoundText';



class App extends React.Component {

    constructor() {
        super();

        this.state = {
            userList: [],
            userName: "",
            loading: false,
            notFound: false
        }
    }

    getUsersList = userName => {

        this.setState({ loading: true })
        const url = `https://api.github.com/search/users?q=${this.state.userName}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ userList: data['items'] })
                if (this.state.userList.length === 0){
                    console.log("Empty Array")
                    this.setState({ notFound: true,loading: false })
                }
                
                else
                    this.setState({ loading: false, notFound:false })

                
                console.log(this.state.userList)
                

            })
    }

    setUserName = e => {
        this.setState({ userName: e.target.value }
        )

    }

    render() {
        const {notFound, loading} = this.state;
        return (
            <div className="App">

                <Header />

                <SearchBox updateUserName={this.setUserName} />

                <SearchButton getUsers={this.getUsersList} />

                {loading ? <Spinner /> : notFound?<NotFoundText/>:
                    <CardContainer>
                        {
                            
                            this.state.userList.map(user =>
                                <Card key={user.id} profile={user} />
                            )
                            
                        }
                    </CardContainer>

                }


            </div>
        );
    }
}

export default App;

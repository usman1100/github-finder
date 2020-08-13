import React from 'react';
import SearchButton from "../SearchButton"
import SearchBox from '../SearchBox';
import CardContainer from '../CardContainer';
import Card from '../Card';
import Spinner from "../Spinner"
import NotFoundText from '../NotFoundText';
import Alert from '../Alert';
import ClearButton from '../ClearButton';


class Finder extends React.Component {

    constructor() {
        super();

        this.state = {
            userList: [],
            userName: "",
            loading: false,
            notFound: false,
            alert: false
        }
    }

    getUsersList = userName => {


        // If user enters nothing
        // Alert will be set to true inorder...
        // ...to display the <Alert/> component
        // NotFound will be set to true just ...
        // ...  to get rid of it on that time
        if (this.state.userName === "") {
            this.setState({ alert: true });
            return;
        }

        this.setState({ loading: true })
        const url = `https://api.github.com/search/users?q=${this.state.userName}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data['items'], "Data")
                this.setState({ userList: data['items'] }, () => {


                    // Making sure the userList value
                    // is an array in all cases so it doesnt throw
                    // an error ever
                    if (this.state.userList === undefined)
                        this.setState({ userList: [] })

                    if (this.state.userList.length === 0) {
                        // Incase of error
                        // i.e Request fails or user is not found
                        this.setState({ notFound: true, loading: false, alert: false })
                    }

                    else {
                        // If everything goes smoothly
                        this.setState({ loading: false, notFound: false, alert: false })
                    }
                })

            })


        console.log(this.state.userList, "Userlist")
    }

    setUserName = e => {
        // Updating the username value
        // obtained from the SearchBox component
        this.setState({ userName: e.target.value }
        )

    }

    clearUsers = () => this.setState({userList:[]})

    render() {
        const { notFound, loading, alert } = this.state;
        return (
            <div className="App">

                    {alert && <Alert />}

                    <SearchBox updateUserName={this.setUserName} />

                    <div className="container">
                        <SearchButton getUsers={this.getUsersList} />

                        <ClearButton func={this.clearUsers} />
                    </div>
                    
                    {
                    loading ? <Spinner /> : // While loading is true show a spinner
                            notFound ? <NotFoundText /> : // If search yields no results,
                                                        // notFound will be true and no users will be shown
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

export default Finder;

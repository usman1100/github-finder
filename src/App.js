import React, { Component } from 'react'
import Finder from "./components/pages/Finder"
import About from "./components/pages/About"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar />

                    <Switch>
                    <Route path="/" exact component={Finder}/>
                    <Route path="/about" exact component={About}/>
                    </Switch>
                    

                </div>
            </Router>
        )
    }
}

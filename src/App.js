import React, { Component } from 'react'
import Finder from "./components/pages/Finder"
import About from "./components/pages/About"
import Header from "./components/Header"

export default class App extends Component {
    render() {
        return (
            <div>

                <Header />

                <Finder/>

                <About/>

            </div>
        )
    }
}

import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import './Home.css'
import Search from "../components/Search/Search";
import List from "../components/List/List";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Header />

                <Search />

                <List />
            </Fragment>
        )
    }
}

export default Home;
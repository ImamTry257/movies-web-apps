import React, { Fragment } from "react";
import Header from "../components/Header";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Header />
                <p>Home Page</p>
            </Fragment>
        )
    }
}

export default Home;
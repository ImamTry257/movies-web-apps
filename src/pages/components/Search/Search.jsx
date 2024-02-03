import React, { Fragment } from "react";

class Search extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="container d-flex justify-content-center pt-5">
                    <div className="row">
                        <div className="col-12">
                            <input type="text" placeholder="Enter your keyword" autoFocus className="search-movie form-control" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Search;
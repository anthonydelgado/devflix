import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {


        super(props);

        //initialize the state
        this.state = { term: '' };

    }

    render() {
        return (
            <div className="col s12">

                <br/>

                <nav className="black">
                    <div className="nav-wrapper">

                            <div className="input-field">
                                <input
                                    id="search"
                                    type="search"
                                    onChange={ event => this.onInputChange(event.target.value) }
                                value={this.state.term} />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons"
                                onClick={ event => {
                                    document.getElementById("search").value = "";
                                } } >close</i>
                            </div>

                    </div>
                </nav>

                <br/>

            </div>

    );
    }

    onInputChange(term){

        this.setState({term});

        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;


import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: 'x'
    };
    render() {
        return(
            <div>
                <input
                 type="text" placeholder="Search here ..."
                 onChange={this.onInputChange} />
                 <h2>Input is: {this.state.term} </h2>
                 <h3> {this.props.status} </h3>
            </div>
        );
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
}


export default SearchBar;
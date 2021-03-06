import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BookList from './BookList';
import BookDetails from './BookDetails';

class App extends Component {
    state = {
        term : ''
    }

    onInputChange = (event) => {
        const value = event.target.value;

        this.props.searchBook(value);

        this.setState({
            term: value
        });
    }

    render () {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange} />
                <BookList />
                <BookDetails />
            </div>
        );
    }
}

export default connect(null, actions)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render () {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(MapStateToProps, actions)(BookList);
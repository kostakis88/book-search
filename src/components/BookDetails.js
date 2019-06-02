import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {

        if (!this.props.book) {
            return <div>Select a book</div>
        }

        return (
            <div>
                Title: {this.props.book.title}
            </div>
        );
    }
}

function mapStateToProps({selectedBook}) {
    return {
        book: selectedBook
    };
}

export default connect(mapStateToProps)(BookDetails);
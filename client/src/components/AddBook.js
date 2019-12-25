import React, { Component } from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors() {
    const data = this.props.getAuthorsQuery;
    // console.log(this.props);
    if (data.loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit.bind(this)} id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            value={this.state.genre}
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          {/* <input
            value={this.state.authorId}
            type="text"
            onChange={e => this.setState({ authorId: e.target.value })}
          /> */}
          <select
            value={this.state.authorId}
            onChange={e => this.setState({ authorId: e.target.value })}
          >
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

// export default graphql(getAuthorsQuery)(AddBook);
export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);

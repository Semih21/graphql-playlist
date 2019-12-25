import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  state = {};
  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);

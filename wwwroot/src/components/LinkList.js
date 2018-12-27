import React, { Component } from "react";
import Link from "./Link";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const POSTS_QUERY = gql` 
{
    posts{
      id
      isPublished
      text
      title
    }
  }
`;

class LinkList extends Component {

    render() {
        return (
            <Query query={POSTS_QUERY}>{
                ({ loading, error, data }) => {
                    if (loading) return <p>Fetching</p>
                    if (error) return <p>`Error!${error.message}`</p>
                    const linksToRender = data.posts;
                    return linksToRender.map(post => <Link key={post.id} link={post} />)
                }

            }</Query>
        )
    }
}

export default LinkList;
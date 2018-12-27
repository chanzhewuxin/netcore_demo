import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const ORDERS_QUERY = gql`
{
    orders{
      id
      name
      description
    }
  }
`

export default class Order extends Component {

    render() {
        return <Query query={ORDERS_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <p>Loadding...</p>
                    if (error) return <p>{error.message}</p>
                    return <ul>
                        {data.orders.map(order => <li key={order.id}>{order.description}</li>)}
                    </ul>
                }
            }
        </Query>
    }
}
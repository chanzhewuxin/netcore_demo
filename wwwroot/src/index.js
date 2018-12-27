import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from "apollo-link-ws";

// const httpLink = createHttpLink({
//     uri: "https://eu1.prisma.sh/paramita-e140ff/demo/dev"
// }) 

const GRAPHQL_ENDPOINT = 'ws://localhost:5000/graphql';

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
    reconnect: true
});

const link = new WebSocketLink(client);

const apolloClient = new ApolloClient({
    // link:httpLink,// httpLink, 
    link:link,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

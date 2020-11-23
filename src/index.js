import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { App, reportWebVitals } from './app';
import './index.css';

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(TOKEN);
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
    uri: GITHUB_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    }
}));

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

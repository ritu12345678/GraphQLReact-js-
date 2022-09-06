import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri:  'https://flyby-gateway.herokuapp.com/',

  cache: new InMemoryCache(),
});


// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
        
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

);



import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

async function startServer() {
    const app = express();
    app.use(cors());

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    app.use('/graphql', bodyParser.json(), expressMiddleware(server));

    app.listen({ port: 4000 }, () =>
        console.log(`Server running at http://localhost:4000/graphql`)
    );
}

startServer();
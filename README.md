# CRUD

Technologies

- **[Angular](https://angular.io)**
- **[Angular Material](https://material.angular.io)**
- **[Angular Apollo Graph](https://the-guild.dev/graphql/apollo-angular)**
- **[NGRX](https://ngrx.io)**

Run

- _npm install_
- _ng serve_

Notes

With **GraphQL** there is no need for models and parsers. We can define data using schemas, as described in the [schemas documentation](https://graphql.org/learn/schema/), and customize data names using aliases, as explained in the [aliases guide](https://graphql.org/learn/queries/).

However, if we need to create **GraphQL** database, we can refer to the provided [example.js](example.js) file for guidance. In this case we use [Rick And Morty GraphQL database](https://rickandmortyapi.com/) to avoid complexity. In conclusion, data retrieval is performed using GraphQL queries, and the local state management is handled with NGRX.

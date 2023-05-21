import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataGetter {
  constructor(private apollo: Apollo) {}

  public getAllData(name: string): Observable<any> {
    const query = gql`
      query GetCharacters($name: String!) {
        characters(filter: { name: $name }) {
          results {
            id
            name
            status
            image
          }
        }
      }
    `;

    return this.apollo
      .query({
        query,
        variables: { name },
      })
      .pipe(
        catchError(() => {
          throw new Error(`Failed in fetch character`);
        })
      );
  }
}

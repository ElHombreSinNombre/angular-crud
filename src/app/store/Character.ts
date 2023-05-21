import { Injectable } from '@angular/core';
import { DataGetter } from '../data/Character';
import { Observable } from 'rxjs';
import { Character } from '../types/Character';
import { editData, saveData, removeData } from './reducer/Actions';
import { Store, select } from '@ngrx/store';
import { DataState } from './reducer/Character';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  constructor(private data: DataGetter, private store: Store<DataState>) {}

  public get characters(): Observable<Character[]> {
    return this.store.pipe(select((state) => state.characters));
  }

  public getAllData(name: string): Observable<any> {
    return this.data.getAllData(name);
  }
  public editData(character: Character) {
    this.store.dispatch(editData({ character }));
  }
  public saveData(character: Character) {
    this.store.dispatch(saveData({ character }));
  }
  public removeData(character: Character) {
    this.store.dispatch(removeData({ character }));
  }
}

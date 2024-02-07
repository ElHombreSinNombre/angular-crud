import { createReducer, on, Action } from '@ngrx/store';
import { Character } from '../../types/Character';
import { editData, saveData, removeData } from './Actions';

export interface DataState {
  characters: Character[];
}

const initialState: DataState = {
  characters: [],
};

const dataReducer = createReducer(
  initialState,
  on(editData, (state, { character }) => {
    return {
      characters: state.characters.map((item) =>
        item.id === character.id ? character : item
      ),
    };
  }),
  on(saveData, (state, { character }) => {
    return {
      characters: [...state.characters, character],
    };
  }),
  on(removeData, (state, { character }) => {
    return {
      characters: state.characters.filter((item) => item.id !== character.id),
    };
  })
);

export function CharacterReducer(state: DataState | undefined, action: Action) {
  return dataReducer(state, action);
}

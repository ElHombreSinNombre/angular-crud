import { createAction, props } from '@ngrx/store';
import { Character } from '../../types/Character';

export const editData = createAction(
  'character/edit',
  props<{ character: Character }>()
);

export const saveData = createAction(
  'character/save',
  props<{ character: Character }>()
);

export const removeData = createAction(
  'character/remove',
  props<{ character: Character }>()
);

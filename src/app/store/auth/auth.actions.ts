import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/Entity/user';

export const setUserDetail = createAction(
  'Set UserDetail',
  props<{ userDetail: User }>()
);

export const deleteUserDetail = createAction('Delete User Detail');
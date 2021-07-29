import { createAction, props } from '@ngrx/store';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';

export const setUserDetail = createAction(
  'Set UserDetail',
  props<{ userDetail: UserDetailDto }>()
);


export const deleteUserDetail = createAction('Delete User Detail');
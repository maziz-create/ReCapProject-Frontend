import { createReducer, on } from '@ngrx/store';
import { setUserDetail, deleteUserDetail } from './auth.actions';
import { User } from 'src/app/models/Entity/user';

export interface AuthState {
  userDetail?: User;
}

const initialAuthState: AuthState = {
  userDetail: undefined,
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(setUserDetail, (state: AuthState, { userDetail }) => ({
    ...state,
    userDetail: userDetail,
  })),
  on(deleteUserDetail, (state: AuthState) => ({
    ...state,
    userDetail: undefined,
  }))
);

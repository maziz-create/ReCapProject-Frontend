import { createReducer, on } from '@ngrx/store';
import { setUserDetail, deleteUserDetail } from './auth.actions';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';

export interface AuthState {
  userDetail?: UserDetailDto;
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

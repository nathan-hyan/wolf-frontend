/* eslint-disable @typescript-eslint/naming-convention */
import { User, UserResponse } from 'interface/Users';

import api from '../config/api';

const USER_PATH = '/users/auth';

// Generated by https://quicktype.io

export interface UserPersistanceResponse {
  success: boolean;
  data: Data;
}

export interface Data {
  cookie: Cookie;
  isAuth: boolean;
  username: string;
  _id: string;
}

export interface Cookie {
  originalMaxAge: number;
  expires: string;
  secure: boolean;
  httpOnly: boolean;
  domain: null;
  path: string;
  sameSite: string;
}

export const loginUser = (user: User) => api.post<UserResponse>(`${USER_PATH}/login`, user);

export const logoutUser = () => api.post(`${USER_PATH}/logout`);
export const checkUserPersistance = () => api.get<UserPersistanceResponse>(`${USER_PATH}/check`);
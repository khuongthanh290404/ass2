export interface Users {
  _id?: string;
  username?: string;
  email: string;
  password: string;
  role?: string;
}

export type State = {
  auths: Users[];
  user: Users | null;
  token: string | null;
};

export type Action =
  | { type: 'SET_AUTH'; payload: { token: string; user: Users } }
  | { type: 'CHECK_TOKEN' }
  | { type: 'LOG_OUT' }
  | { type: 'GET_AUTH'; payload: Users[] }
  | { type: 'DELETE_AUTH'; payload: string };

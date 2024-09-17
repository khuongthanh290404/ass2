export interface Users {
  _id?: string;
  username?: string;
  email: string;
  password: string;
  role?: string;
}

export type State = {
  user: Users | null;
  token: string | null;
};

export type Action =
  | { type: 'SET_AUTH'; payload: { token: string; user: Users } }
  | { type: 'CHECK_TOKEN' }
  | { type: 'LOG_OUT' };

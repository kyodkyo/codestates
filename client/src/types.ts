export interface Id {
  id: number;
}

export interface NewUser {
  email: string;
  name?: string;
  address?: string;
  phone?: string;
  token?: string;
}

export type User = Id & NewUser;

export interface IQuestion {
  postNumber: number;
  userNumber: number;
  date: string;
  title: string;
  contents: string;
  user: {
    userNumber: number;
    userId: string;
    email: string;
  };
}

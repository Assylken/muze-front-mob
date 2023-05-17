export interface IUser {
  access_token: string;
}

export interface IRegister {
  username: string;
  email: string;
  isArtist: boolean;
  countryId: number;
  password: string;
}

export interface ILogin {
  usernameOrEmail: string;
  password: string;
}

export interface IAuth {
  user?: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
}

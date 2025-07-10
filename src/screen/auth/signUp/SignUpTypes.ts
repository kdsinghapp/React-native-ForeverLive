  export interface Credentials {
    email: string;
    password: string;
    fullName: string;
    conPassword: string;
    mobile: string;
    city:string
  }

  // Define type for errors
  export interface Errors {
    email?: string;
    password?: string;
    fullName?: string;
    conPassword?: string;
    mobile?: string;
    city:string

  }


  export interface RootStackParamList {
    LoginScreen: undefined;
    PasswordReset: undefined;
    [key: string]: undefined; // Adding an index signature
  }

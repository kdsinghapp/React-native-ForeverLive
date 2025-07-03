export interface RouteParams {
  email?: string;
}

export interface UserOtpHook {
  navigation: any;
  isLoading: boolean;
  ref: any;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  props: any;
  getCellOnLayoutHandler: any;
  value: string;
  setValue: (text: string) => void;
  handleChangeText: (text: string) => void;
  handleVerifyOTP: () => Promise<void>;
}


 

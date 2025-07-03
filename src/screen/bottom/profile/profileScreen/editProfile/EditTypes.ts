interface UserData {
  id: string;
  user_name: string;
  email: string;
  password: string;
  type: string;
  country_code: string;
  mobile: string;
  image: string;
  updated_at: string;
  created_at: string;
  device_id: string | null;
  status: string;
  country: string;
  otp: string;
  city: string;
  district: string;
  qr_image: string;
  qr_code: string;
  point: string;
  access_token: string;
}

interface ForgotData {
  email: string;
  otp: string;
  resetLink: string;
  // Other fields relevant to the password recovery process
}

interface BetOption {
  optionId: string;
  optionName: string;
  value: string;
  // Other bet-related fields
}

interface GameResult {
  gameId: string;
  result: string;
  score: number;
  // Other game result fields
}

interface NewBetOption {
  optionId: string;
  optionName: string;
  value: string;
  // Other new bet option fields
}

interface AuthState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isLogin: boolean;
  isLogOut: boolean;
  userData: UserData;
  token: string;
  forgotData: ForgotData | null; // Updated type
  betOption: BetOption | null;  // Updated type
  gameResult: GameResult | null; // Updated type
  newbetOption: NewBetOption | null; // Updated type
}

export interface RootState {
  auth: AuthState;
  
}





  export interface  ImageFile {
    path: string;
  }

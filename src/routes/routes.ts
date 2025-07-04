import imageIndex from "../assets/imageIndex";
import TabNavigator from "../navigators/TabNavigator";
import AddEmail from "../screen/addEmail/AddEmail";
import CreateNewPassword from "../screen/auth/createNewPassword/CreateNewPassword";
import Login from "../screen/auth/login/Login";
import OnboardingScreen from "../screen/auth/onboarding/Onboarding";
import OtpScreen from "../screen/auth/otp/OtpScreen";
import PasswordReset from "../screen/auth/passwordReset/PasswordReset";
import SignUp from "../screen/auth/signUp/SignUp";
import Splash from "../screen/auth/splash/Splash";
import Home from "../screen/bottom/home/Home";
import Countdown from "../screen/bottom/home/homefile/Countdown/Countdown";
import LegacyCalendar from "../screen/bottom/home/homefile/LegacyCalendar/LegacyCalendar";
import MemoryLane from "../screen/bottom/home/homefile/MemoryLane/MemoryLane";
import VaultAccess from "../screen/bottom/home/homefile/VaultAccess/VaultAccess";
import Network from "../screen/bottom/network/Network";
import Picture from "../screen/bottom/Picture/Picture";
import EditProfile from "../screen/bottom/profile/profileScreen/editProfile/EditProfile";
import Setting from "../screen/bottom/setting/Setting";
 import Vault from "../screen/bottom/Vault/Vault";
import ChangeLanguage from "../screen/ChangeLanguage/ChangeLanguage";
 import PhotoUpload from "../screen/photoUpload/PhotoUpload";
import HelpSupportScreen from "../screen/privay/HelpSupport";
import PrivacyPolicy from "../screen/privay/PrivacyPolicy";
import ScanCode from "../screen/scanCode/ScanCode";
import SubscriptionPlan from "../screen/subscriptionPlan/SubscriptionPlan";
import TextScreen from "../screen/textScreen/TextScreen";
import Voice from "../screen/voice/Voice";
import ScreenNameEnum from "./screenName.enum";
import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state: any) => state?.auth);
};

const _routes = () => {
  const isLogin = useAuth();

  return {
    REGISTRATION_ROUTE: [
      { name: ScreenNameEnum.SPLASH_SCREEN, Component: Splash },
      { name: ScreenNameEnum.SignUpScreen, Component: SignUp },
      { name: ScreenNameEnum.LoginScreen, Component: Login },
      { name: ScreenNameEnum.OnboardingScreen, Component: OnboardingScreen },
      { name: ScreenNameEnum.PasswordReset, Component: PasswordReset },
      { name: ScreenNameEnum.OtpScreen, Component: OtpScreen },
      { name: ScreenNameEnum.CreatePassword, Component: CreateNewPassword },
      { name: ScreenNameEnum.TabNavigator, Component: TabNavigator },
      { name: ScreenNameEnum.HelpSupport, Component: HelpSupportScreen },
      { name: ScreenNameEnum.PrivacyPolicy, Component: PrivacyPolicy },
      { name: ScreenNameEnum.AddEmail, Component: AddEmail },
      { name: ScreenNameEnum.PhotoUpload, Component: PhotoUpload },
      { name: ScreenNameEnum.ScanCode, Component: ScanCode },
      { name: ScreenNameEnum.Voice, Component: Voice },
      { name: ScreenNameEnum.TextScreen, Component: TextScreen },
      { name: ScreenNameEnum.ChangeLanguage, Component: ChangeLanguage },
      { name: ScreenNameEnum.editProfile, Component: EditProfile },
      { name: ScreenNameEnum.VaultAccess, Component: VaultAccess },
      { name: ScreenNameEnum.SubscriptionPlan, Component: SubscriptionPlan },
      { name: ScreenNameEnum.Countdown, Component: Countdown },
      { name: ScreenNameEnum.LegacyCalendar, Component: LegacyCalendar },
      { name: ScreenNameEnum.MemoryLane, Component: MemoryLane },
    ],

    BOTTOMTAB_ROUTE: [
      {
        name: ScreenNameEnum.HOME_SCREEN,
        Component: Home,
         logo: imageIndex.home,
        logo1: imageIndex.homeActive,
      },
      {
        name: ScreenNameEnum.Picture,
        Component: Picture,
         logo: imageIndex.g,
        logo1: imageIndex.g1,
      },
      {
        name: ScreenNameEnum.Vault,
        Component: Vault,
         logo: imageIndex.lo,
        logo1: imageIndex.locke,
      },
      {
        name: ScreenNameEnum.Network,
        Component: Network,
         logo: imageIndex.netw,
        logo1: imageIndex.network,
        
      },
      {
        name: ScreenNameEnum.Setting,
        Component: Setting,
         logo: imageIndex.setting1,
        logo1: imageIndex.setting,
        
      },
    ],
  };
};

export default _routes;

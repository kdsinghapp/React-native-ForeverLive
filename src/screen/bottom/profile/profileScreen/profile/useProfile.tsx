import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../../redux/feature/authSlice';
import ScreenNameEnum from '../../../../../routes/screenName.enum';
import { successToast } from '../../../../../utils/customToast';
import { GetProfile } from '../../../../../redux/Api/AuthApi';

const useProfile = () => {
  const dispatch = useDispatch();
  const getLogin = useSelector((state: any) => state?.feature);
  const [logoutModal, setLogoutModal] = useState(false)
  const navigation = useNavigation<any>();
  const isLogin = useSelector((state: any) => state?.auth);
  const [imgloading, setimgloading] = useState(false);

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = useCallback(() => {
    if (isLogin?.userData?.id) {
      GetProfile(isLogin?.userData?.id, dispatch);
    }
  }, [isLogin?.userData?.id, dispatch]);
  const handleLogout = () => {
    dispatch(logout());
    setLogoutModal(false);
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNameEnum.SPLASH_SCREEN }],
    });
    successToast('Logout Successful');
  };
  return {
    logoutModal, setLogoutModal,
    handleLogout, navigation,
    getLogin,
    isLogin,
    imgloading, setimgloading
  };
};

export default useProfile;

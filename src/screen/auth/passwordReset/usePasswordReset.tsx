import { useState } from 'react';
 import { useNavigation } from '@react-navigation/native';
import { ForgotPassUserApi } from '../../../redux/Api/AuthApi';
import localizationStrings from '../../../Localization/Localization';
 
 const usePasswordReset = () => {
  const [errors, setErrors] = useState <any>({});
   const navigation = useNavigation();
   const [isLoading, setisLoading] = useState(false)
   const [type, setType] = useState("")
  const [credentials, setCredentials] = useState({ email: '',mob:"" });
  //  const [credentials, setCredentials] = useState({ email: 'Seller13@gmail.com',mob:"" });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (field:string, value:string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    setErrors((prev:any) => ({ ...prev, [field]: '' }));
    if (field === 'email') {
      if (!value.trim()) {
        setErrors((prev:any) => ({ ...prev, email: localizationStrings.email_required }));
      } else if (!emailRegex.test(value)) {
        setErrors((prev:any) => ({ ...prev, email:  localizationStrings.email_invalid }));
      }
    }
  
  };
  const handleForgot =async () => {
    const { email } = credentials;
    let validationErrors:any = {}; 
      //  if (!mob.trim()) {
      //   validationErrors.mob = 'Mobile No. is required.';
      // }
    if (!email.trim()) {
      validationErrors.email =localizationStrings.email_required ;
    } else if (!emailRegex.test(email)) {
      validationErrors.email =  localizationStrings.email_invalid ;
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
     try {
      const params = { email:email,navigation:navigation };
       const response = await ForgotPassUserApi(params, setisLoading);
       
    } catch (error) {
     }
   };


  return {
    credentials,
    errors,
    isLoading,
    handleChange,
    handleForgot,
    navigation,
    type, setType
  };
};

export default usePasswordReset;

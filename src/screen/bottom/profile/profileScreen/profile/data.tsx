import imageIndex from "../../../../../assets/imageIndex";
import localizationStrings from "../../../../../Localization/Localization";
import ScreenNameEnum from "../../../../../routes/screenName.enum";

const menuItems = [
  { title: localizationStrings.notification, icon: imageIndex.notification, screen: ScreenNameEnum.Notification },
  { title:localizationStrings.about_inside, icon: imageIndex.infocircle, screen: ScreenNameEnum.AboutFootb },
  { title:localizationStrings.legal_information, icon: imageIndex.docBalck, screen: ScreenNameEnum.Legalinfor },
  // { title: "HELP CENTRE", icon: imageIndex.help, screen: "HelpCentre" },
  { title: localizationStrings.send_your_feedback, icon: imageIndex.feedback, screen: ScreenNameEnum.Feedback },
  { title: localizationStrings.logout, icon: imageIndex.logout, screen: "logout" },
];

const menuItems2 = [
  { title: localizationStrings?.my_appointment, icon: imageIndex.task, screen: ScreenNameEnum.MyApointment },
  { title:localizationStrings?.payment, icon: imageIndex.wallet, screen: ScreenNameEnum.ProfilePayment },
];

const menuItems3 = [
  // { title: "ADD CATEGORIES", icon: imageIndex.task, screen: ScreenNameEnum.AddCategory },
  { title: localizationStrings?.seller_services, icon: imageIndex.task, screen: ScreenNameEnum.AddsellerCategory },
  { title:localizationStrings?.custom_create_categories, icon: imageIndex.task, screen: ScreenNameEnum.ShowSellerServices },

  { title: localizationStrings?.documents, icon: imageIndex.task, screen: ScreenNameEnum.ViewDocument },
  { title: localizationStrings?.payment_history, icon: imageIndex.wallet, screen: ScreenNameEnum.PaymentHistory },
];


// Export all as a default object
 
export { menuItems,menuItems2,menuItems3}  
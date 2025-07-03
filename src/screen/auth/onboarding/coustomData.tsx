import { ImageSourcePropType } from "react-native";
import imageIndex from "../../../assets/imageIndex";

interface Slidse {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
}
  export interface Slide {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
}

const slides: Slidse[] = [
    {
        id: '1',
        title: 'Welcome to Inside Marrakesh',
        description: 'The biggest fashion community for inspiration and shopping.',
        image: imageIndex.onBag,
    },
   
    {
        id: '3',
        title: 'Welcome to Inside Marrakesh',
        description: 'The biggest fashion community for inspiration and shopping.',
        image: imageIndex.onBag,
    },
   

]; 
export default slides
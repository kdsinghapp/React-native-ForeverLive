import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GetNote, GetUploadFile } from '../../../redux/Api/AuthApi';

const useVault = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
   const [isModalVisible1, setModalVisible1] = useState(false);
    const [recordedPath, setRecordedPath] = useState<string | null>(null);
     const [pathAudio, setpathAudio] = useState();
  const [capsulesList, setCapsulesList] = useState([]);
  const [lettersList, setLettersList] = useState([]);
  const [audioList, setAudioList] = useState([]);

  const fetchCapsules = async () => {
    try {
      setLoading(true);
      const response = await GetNote(setLoading); // example API for Capsules
      if (response && response.data) {
        setCapsulesList(response.data);
      } else {
        console.warn("No capsules data.");
      }
    } catch (error) {
      console.error("Capsules fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLetters = async () => {
    try {
      setLoading(true);
      const response = await GetUploadFile(setLoading, "IMAGE"); // example for Letters
      if (response && response.data) {
        setLettersList(response.data);
      } else {
        console.warn("No letters data.");
      }
    } catch (error) {
      console.error("Letters fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAudio = async () => {
    try {
      setLoading(true);
      const response = await GetUploadFile(setLoading, "AUDIO"); // adjust type to AUDIO
      if (response && response.data) {
        setAudioList(response.data);
      } else {
        console.warn("No audio data.");
      }
    } catch (error) {
      console.error("Audio fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    navigation,
    loading,
    fetchCapsules,
    fetchLetters,
    fetchAudio,
    capsulesList,
    lettersList,
    audioList,
    isModalVisible1, setModalVisible1 ,
    pathAudio, setpathAudio ,
    recordedPath, setRecordedPath
  };
};

export default useVault;

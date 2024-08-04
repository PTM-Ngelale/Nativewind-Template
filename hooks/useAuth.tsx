import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  isLoading: boolean;
  userToken: string | null;
}

const useAuth = (): AuthState => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setUserToken(token);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  return { isLoading, userToken };
};

export default useAuth;

import { useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

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
        const token = await SecureStore.getItemAsync("alarmixToken");
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

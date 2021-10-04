import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const getOnLineStatus = () => NetInfo.fetch().then(state => state.isConnected);

const useOnline = () => {
  const [isOnLine, setIsOnLine] = useState(getOnLineStatus());

  const setIsOnlineStatus = isConnected => {
    setIsOnLine(() => (isConnected ? true : false));
  };

  useEffect(() => {
    NetInfo.addEventListener(({ isConnected }) =>
      setIsOnlineStatus(isConnected),
    );

    return () => {
      NetInfo.removeEventListener(({ isConnected }) =>
        setIsOnlineStatus(isConnected),
      );
    };
  }, []);

  return isOnLine;
};

export default useOnline;

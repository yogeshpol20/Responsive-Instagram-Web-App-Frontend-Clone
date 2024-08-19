import { createContext, useContext, useEffect, useState } from 'react';

const NetworkStatusContext = createContext();

export const NetworkStatusProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      updateFavicon(navigator.onLine);
    };

    const updateFavicon = (online) => {
      const favicon = document.getElementById('favicon');
      if (online) {
        favicon.href = `${process.env.PUBLIC_URL}/favicon.ico`;
      } else {
        favicon.href = `${process.env.PUBLIC_URL}/favicon-offline.ico`;
      }
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    updateFavicon(navigator.onLine);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={isOnline}>
      {children}
    </NetworkStatusContext.Provider>
  );
};

export const useNetworkStatus = () => useContext(NetworkStatusContext);


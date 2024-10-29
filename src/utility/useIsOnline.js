import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
    // Initialize isOnline state to true when the component mounts and false when it unmounts
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [])
    return isOnline;
}
export default useIsOnline;
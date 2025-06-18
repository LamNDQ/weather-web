import React, { useEffect, useState } from 'react';

export default function TopBar() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup
    }, []);

    // Format date and time
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
        timeZoneName: 'short'
    };

    const formattedTime = currentTime.toLocaleString('en-US', options);

    return (
        <div className="w-full bg-gray-300 border-t-4 border-blue-500 text-center py-1 text-sm text-black">
            {formattedTime}
        </div>
    );
}

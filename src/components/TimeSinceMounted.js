import { useEffect, useState } from "react";

function TimeSinceMounted() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            setSeconds(elapsed);
        }, 1000);

        // cleanup → runs when component unmounts
        return () => clearInterval(interval);
    }, []); // empty array = runs once on mount

    return (
        <div>
            <p>Component mounted {seconds} seconds ago</p>
        </div>
    );
}

export default TimeSinceMounted;

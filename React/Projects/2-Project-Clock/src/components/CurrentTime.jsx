import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = ()=>{
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        console.log("Interval has been setup");
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
            console.log('Canceled the Interval');
        }
    })

    return <p className="p-2 text-center">
        This is the current time : {time.toLocaleDateString()} and {time.toLocaleTimeString()}
    </p>
}

export default CurrentTime;
import React, {useState, useEffect} from 'react';

const useCounter = (forwards= false) => {
    const[counter, setCounter] = useState(0);
    console.log(forwards)
    useEffect( () => {
        const interval = setInterval(() => {
            if(forwards) {
                console.log("here2")
                setCounter( (prevCounter) => prevCounter + 1)
            } else {
                console.log("here")
                setCounter( (prevCounter) => prevCounter - 1)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;
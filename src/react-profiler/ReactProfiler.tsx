import { useState, useEffect, memo, useCallback } from 'react';

const ReactProfiler = memo(() => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    useEffect(() => {
        console.log('Component rendered');
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increase count</button>
        </div>
    );
});

export default ReactProfiler;

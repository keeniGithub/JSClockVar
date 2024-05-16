import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Clock(){

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    let codeString = `const clock = {
        "hour": ${currentTime.getHours()},
        "minute": ${currentTime.getMinutes()},
        "second": ${currentTime.getSeconds()},
        "day": ${currentTime.getDate()},
        "month": ${currentTime.getMonth()+1},
        "year": ${currentTime.getFullYear()},
    }`

    return (
        <div>
            <SyntaxHighlighter language="javascript" style={dark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

export default Clock
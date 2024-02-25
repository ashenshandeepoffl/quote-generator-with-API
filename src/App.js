import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((result) => {
                const { advice } = result.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleNewAdviceClick = () => {
        fetchAdvice();
    }

    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={handleNewAdviceClick}>Get New Advice</button>
            </div>
        </div>
    );
}

export default App;

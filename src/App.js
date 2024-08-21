import React, { useState } from 'react';
import { add } from './component/StringCalculator';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (err) {
            setResult(null);
            setError(err.message);
        }
    };

    return (
        <div style={{ padding: '20px'}}>
            <h1>String Calculator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Enter numbers" 
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={handleCalculate} style={{ padding: '10px', marginLeft: '10px' }}>
                Calculate
            </button>
            {result !== null && <div style={{ marginTop: '20px' }}>Result: {result}</div>}
            {error && <div style={{ marginTop: '20px', color: 'red' }}>Error: {error}</div>}
        </div>
    );
}

export default App;

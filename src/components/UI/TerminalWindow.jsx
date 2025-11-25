import React, { useState, useEffect, useRef } from 'react';
import './TerminalWindow.css';

const TerminalWindow = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to RicOS v1.0.0' },
        { type: 'output', content: 'Type "help" for available commands.' },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const commands = {
        help: () => 'Available commands: help, clear, email, linkedin',
        email: () => 'RicRebullWork@gmail.com',
        linkedin: () => {
            window.open('https://www.linkedin.com/in/ric-rebull-b9200a2a6/', '_blank');
            return 'Opening LinkedIn profile...';
        },
        clear: () => {
            setHistory([]);
            return null;
        },
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'command', content: input }];

            if (cmd) {
                if (commands[cmd]) {
                    const output = commands[cmd]();
                    if (output !== null) {
                        newHistory.push({ type: 'output', content: output });
                    }
                } else {
                    newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
                }
            }

            if (cmd === 'clear') {
                setHistory([]);
            } else {
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Focus input on click
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-window" onClick={handleTerminalClick}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-btn close"></span>
                    <span className="terminal-btn minimize"></span>
                    <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">ric@portfolio: ~</div>
            </div>
            <div className="terminal-body">
                {history.map((item, index) => (
                    <div key={index} className={`terminal-line ${item.type}`}>
                        {item.type === 'command' && <span className="prompt">ric@portfolio:~$</span>}
                        {item.content}
                    </div>
                ))}
                <div className="terminal-input-line">
                    <span className="prompt">ric@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="terminal-input"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default TerminalWindow;

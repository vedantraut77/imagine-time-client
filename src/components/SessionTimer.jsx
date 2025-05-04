import React, { useState, useEffect, useRef } from 'react';
import '../styles/SessionTimer.css';

const SESSION_TYPES = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

const SessionTimer = () => {
  const [sessionType, setSessionType] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(SESSION_TYPES[sessionType]);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(SESSION_TYPES[sessionType]);
  };

  const switchSession = (type) => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSessionType(type);
    setTimeLeft(SESSION_TYPES[type]);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className='Timer_box'>

            <div className="Time-mode-1">

                <button
                        className="time-mode-btn"
                        onClick={() => switchSession('pomodoro')}
                      >
                        pomodoro
                      </button>
                      <button
                        className="time-mode-btn"
                        onClick={() => switchSession('shortBreak')}
                      >
                        short break
                      </button>
                      <button
                        className="time-mode-btn"
                        onClick={() => switchSession('longBreak')}
                      >
                        long break
                      </button>

            </div>

            <div className="Time-item-2"> <h2>{formatTime(timeLeft)}</h2> </div>

            <div className="Time-item-3">
            <button className="btn-1" onClick={isRunning ? pauseTimer : startTimer}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button className="btn-3" onClick={resetTimer}>Reset</button>
    </div>


    </div>
  );
};

export default SessionTimer;

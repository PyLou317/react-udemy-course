import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const countdown = (timeLeft / 1000).toFixed(0);

  return (
    <div id="timer-div">
      <span id="countdown">{countdown}</span>
      <progress
        id="question-timer"
        value={timeLeft}
        max={timeout}
        className={mode}
      />
    </div>
  );
}

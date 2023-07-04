import { useEffect, useRef, useState } from 'react';

// const App = () => {
//   const [starttime, setStartTime] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [isStart, setIsStart] = useState(false);

//   const [pauseTime, setPauseTime] = useState(0);

//   const intervalIdRef = useRef(null);

//   console.log('currentTime', currentTime);
//   console.log('starttime', starttime);
//   console.log('pauseTime', pauseTime);
//   console.log('intervalIdRef', intervalIdRef);
//   console.log(currentTime - starttime);

//   useEffect(() => {
//     if (isStart) {
//       const start = () => {
//         setIsStart(true);
//         setStartTime(Date.now());
//         setCurrentTime(Date.now() + pauseTime);

//         intervalIdRef.current = setInterval(() => {
//           setCurrentTime(Date.now() + pauseTime);
//         }, 1000);
//       };

//       start();
//     }

//     return () => {
//       clearInterval(intervalIdRef.current);
//     };
//   }, [isStart, pauseTime]);

//   const pause = () => {
//     setIsStart(false);

//     clearInterval(intervalIdRef.current);
//     setPauseTime(currentTime - starttime);
//   };

//   const stop = () => {
//     setIsStart(false);
//     clearInterval(intervalIdRef.current);
//   };

//   const reset = () => {
//     if (isStart) {
//       setStartTime(Date.now());
//       setCurrentTime(0);
//       setPauseTime(0);
//     } else {
//       setStartTime(0);
//       setCurrentTime(0);
//       setPauseTime(0);
//     }
//   };

//   const timer = Math.floor(currentTime - starttime);

//   const formattedTime = timer => {
//     timer = timer || 0;

//     const seconds = Math.floor(timer / 1000) % 60;
//     const minutes = Math.floor(timer / 1000 / 60) % 60;
//     const hours = Math.floor(timer / 1000 / 3600);

//     const formattedSeconds = String(seconds).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedHours = String(hours).padStart(2, '0');

//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//   };

//   return (
//     <div>
//       <p>{formattedTime(timer)}</p>
//       <button onClick={() => setIsStart(true)}>Start</button>
//       <button onClick={() => pause()}>Pause</button>
//       <button onClick={() => stop()}>Stop</button>
//       <button onClick={() => reset()}>Reset</button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isAfterPause, setIsAfterPause] = useState(false);
  const ref = useRef(null);

  console.log(time);

  useEffect(() => {
    if (isStart) {
      const timer = () => {
        if (!isAfterPause) {
          setTime(0);
        }

        ref.current = setInterval(() => {
          setTime(prev => (prev += 1));
        }, 1000);
      };

      timer();
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [isAfterPause, isStart]);

  const stop = () => {
    setIsStart(false);
    setIsAfterPause(false);
    clearInterval(ref.current);
    setTime(time);
  };

  const pause = () => {
    setIsStart(false);
    setIsAfterPause(true);
    clearInterval(ref.current);
    setTime(time);
  };

  const reset = () => {
    setIsStart(false);
    setIsAfterPause(false);
    clearInterval(ref.current);
    setTime(0);
  };

  const formattedTime = time => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 3600) % 60);

    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <p>{formattedTime(time)}</p>
      <button onClick={() => setIsStart(true)}>Start</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default App;

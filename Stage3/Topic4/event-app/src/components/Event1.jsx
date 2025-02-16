import { useEffect, useRef } from 'react';

// 1. onChange - input
// 2. onCLick - any
// 3. onFocus - input
// 4. onBlur - input
// 5. onMouseEnter - any
// 6. onMouseLeave - any
// 7. onScroll - any

function Event() {
  const videoRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', function () {
      console.log('scroll');
    });
  }, []);

  console.log(videoRef);

  function handleClick(e) {
    console.log('click', e);
  }

  function handleMouseEnter() {
    console.log('mouse enter');
  }

  function handleScroll() {}

  return (
    <>
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
      <video
        ref={videoRef}
        style={{ background: 'red', height: 400 }}
        onMouseEnter={handleMouseEnter}
        controls={false}
        onClick={handleClick}
        onScroll={handleScroll}
      >
        Event
      </video>
    </>
  );
}

export default Event;

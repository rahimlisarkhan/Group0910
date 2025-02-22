import { useEffect, useLayoutEffect, useState } from 'react';

function Parent(props) {
  const [show, setShow] = useState(true);

  const [length, setLength] = useState(0);

  console.log('show', show);
  console.log('props.count', props.count);

  useEffect(() => {
    console.log('Step1');
  }, []);

  //? ComponentWillMount
  useLayoutEffect(() => {
    console.log('Step2');
  }, []);

  //? ComponentDidMount
  //   useEffect(() => {
  //     let time = setInterval(() => {
  //       setLength((length) => length + 1);
  //     }, 1000);

  //     console.log('Parent rendered');

  //     // // getMovies()
  //     // document.title = 'Parent Component';

  //     function cleanUp() {
  //       console.log('Clean up');
  //       localStorage.removeItem('team_id');
  //       clearInterval(time);
  //       //   setLength(0);
  //       //   setShow(false);
  //     }

  //     //? ComponentDidUnmount
  //     return cleanUp;
  //   }, []);

  //   //? ComponentDidUpdate
  //   useEffect(() => {
  //     if (props.count > 10) {
  //       console.log('xususi rendered');
  //     }

  //     // if (showView == 'Activty') {
  //     //   console.log('showView Activty');
  //     // }

  //     if (show) {
  //       console.log('show true');
  //     } else {
  //       console.log('show false');
  //     }

  //     console.log('write rendered');
  //   }, [props.count, show]);

  //? ComponentDidUpdate
  //   useEffect(() => {
  //     console.log('Parent rendered');

  //     if (props.count > 0) {
  //       setLength(props.count);
  //     }
  //   }, [props.count]);

  return (
    <div style={{ width: 300, height: 400, background: 'red' }}>
      Parent {length}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default Parent;

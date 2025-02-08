import Personal from './components/Personal';

function App() {
  function handleHello(num) {
    console.log('Hello', num);
    //? your logic
  }

  return (
    <div>
      <Personal name="John Doe" age={33} handleHello={handleHello} />
    </div>
  );
}

export default App;

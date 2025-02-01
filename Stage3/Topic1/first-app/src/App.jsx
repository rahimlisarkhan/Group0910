import Footer from './components/Footer';
import Header from './components/Header';
import { convertTime } from './utils/time';
// import { Header } from './components/Header';

const a = 11;

const App = () => {
  const myText = convertTime();

  return (
    <div>
      <Header></Header>
      <h1>
        Hello React {a} {myText}
      </h1>
      <Footer />
    </div>
  );
};

export default App;

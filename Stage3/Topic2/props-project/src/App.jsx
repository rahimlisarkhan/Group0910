import Button from './components/Button';
import ParentComponent from './components/ParentComponent';
import Title from './components/Title';

function App() {
  const address = {
    a: 'a1',
    b: 'a2',
  };

  function sayHello() {
    console.log('Hello');
  }

  return (
    <>
      <div>Hello</div>
      <div>Hello</div>

      <Title color="blue" variant="title1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum
        tempora vitae, facilis quia magni, eum rem itaque exercitationem tenetur
        distinctio iure voluptatum necessitatibus tempore quam architecto. Eius,
        unde modi!
      </Title>

      <Button variant="container" color="danger">
        +Create
      </Button>
      {/* <Button color="#5d3bc4">+Create</Button>
      <Button color="#c43e3b">+Create</Button>
      <Button color="#8dc43b">+Create</Button>
      <Button color="#3b8bc4">+Create</Button> */}
      <ParentComponent
        title="Title"
        age={33}
        married={false}
        add={address}
        salamVer={sayHello}
        list={[1, 2, 3, 4]}
      >
        <div>Hello 2</div>
        <div>Hello 2</div>
      </ParentComponent>
    </>
  );
}

export default App;

import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <button className='btn--main'>Add new task</button>
      <Todo text='Learn React' />
      <br></br>
      <Todo text='Master React' />
      <br></br>
      <Todo text='Explore React' />
      <br></br>
    </div>
  );
};

export default App;

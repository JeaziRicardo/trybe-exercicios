import './App.css';

const Tasks = ['fazer o almoço', 'lavar os pratos', 'estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
   Tasks.map((item) => Task(item))
  );
}

export default App;

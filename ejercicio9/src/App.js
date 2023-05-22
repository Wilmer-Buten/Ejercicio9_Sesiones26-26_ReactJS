import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/TaskListComponent';
import TaskState from './context/states/TaskState';
import FilterState from './context/states/FilterState';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskState>
        <FilterState>
          <TaskListComponent></TaskListComponent>
          </FilterState>
        </TaskState>
      </header>
    </div>
  );
}

export default App;

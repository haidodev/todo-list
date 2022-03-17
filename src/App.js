import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import CategoryTask from "./CategoryTask";
import CreateTask from "./CreateTask";
import TaskDetails from "./TaskDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateTask />
            </Route> 
            <Route path="/task/:id">
              <TaskDetails />
            </Route> 
            <Route path="/:filterTask">
              <CategoryTask />
            </Route> 
            {/* <Route path="/school">
              <SchoolTask />
            </Route>            */}
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;

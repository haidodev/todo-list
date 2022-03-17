import TODOList from "./TODOList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:todoList, isPending, error} = useFetch('http://localhost:8000/tasks');
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { todoList && <TODOList todoList={todoList}/>}
        </div>
        
     );
}
 
export default Home;
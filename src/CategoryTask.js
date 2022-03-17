import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./NotFound";
import TODOList from "./TODOList";
import useFetch from "./useFetch";

const CategoryTask = () => {
    
    const {data:todoList, isPending, error} = useFetch('http://localhost:8000/tasks');
    const { filterTask } = useParams();
    const categoryList = ["work", "school", "relationship"];
    const filterValid =  categoryList.includes(filterTask);
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { todoList && filterValid && <TODOList todoList={todoList} taskFilter={filterTask}/>}
            { todoList && !filterValid && <NotFound/>}
        </div>
        
     );
}
 
export default CategoryTask;
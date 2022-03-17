import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const {data:task, isPending, error} = useFetch('http://localhost:8000/tasks/' + id);
    return ( 
        <div className="task-details">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { task && (
                <article>
                    <h2>{ task.title }</h2>
                    <p>Category: { task.category }</p>
                    <p>{ task.body }</p>
                </article>
            )}
        </div>
     );
}
 
export default TaskDetails;
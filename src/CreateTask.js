import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateTask = () => {
    const [category, setCategory] = useState('work');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {category, title, body};
        setIsPending(true);
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {"content-Type": "application/json" },
            body: JSON.stringify(task)
        })
        .then(() => {
            setIsPending(false);
            history.go(-1);
        })
    }
    return ( 
        <div className="create">
            <h2>Create a new task</h2>
            <form onSubmit={handleSubmit}>
                <label>Category</label>
                <select 
                    value={category}
                    onChange={(e) => {setCategory(e.target.value)}}
                >
                    <option value="work">Work</option>
                    <option value="school"> School</option>
                    <option value="relationship">Relationship</option>
                </select>
                <label>Title</label>
                <input
                    type="text" 
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Body</label>
                <textarea
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}    
                ></textarea>
                {isPending && <button>Add Task</button>}
                {!isPending && <button disabled>Adding Task</button>}

            </form>
        </div>
        
     );
}
 
export default CreateTask;
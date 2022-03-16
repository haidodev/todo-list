import deleteButton from './images/delete.png';
import editButton from './images/edit.png';


const TODOList = (props) => {
    const todo = props.todo;

    return ( 
        <div className="todo">
            <div className="todo-preview">
                <div className="header">
                    <div className={"marker-" + todo.category}></div>
                    <img src={deleteButton} alt="edit" />
                    <img src={editButton} alt="delete" />
                    
                </div>
                <p>{todo.title}</p>
            </div>
            
        </div>
     );
}
 
export default TODOList;
import deleteButton from './images/delete.png';
import editButton from './images/edit.png';
import { Link } from 'react-router-dom';
const TODOList = (props) => {
    let todoList = props.todoList;
    const taskFilter = props.taskFilter;
    if (taskFilter) todoList = todoList.filter((todo) => todo.category === taskFilter);

    return (
        <div className="todo-list">
            {todoList.map((todo) => {
                return (<div className={"todo-preview" + ' ' + todo.category}>
                        <div className="header">
                            <div className={"marker" + ' ' + todo.category}></div>
                            <div className="todo-command">
                                <img src={deleteButton} alt="edit" />
                                <img src={editButton} alt="delete" />
                            </div>
                        </div>
                        <Link to={'/task/' + todo.id}>
                            <p className={'title-preview'}>{todo.title}</p>
                        </Link>

                    </div>)
            })}
            <Link className="createTask" to="/create">
                +
            </Link>

        </div>
    );
}

export default TODOList;
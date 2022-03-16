import TODOList from "./TODOList";

const Home = () => {
    const todo = {
        "title": "Submit report Submit report Submit report Submit report Submit report Submit report",
        "details": "The detailed report",
        "category": "work",
        "id": 1
      }
    return ( 
        <div className="home">
            <TODOList todo={todo}/>
        </div>
     );
}
 
export default Home;
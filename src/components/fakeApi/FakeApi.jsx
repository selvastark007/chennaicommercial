import React, { useEffect, useState } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";

// sass
import "./FakeApi.scss";

const FakeApi = () => {
  const [posts, setPosts] = useState([]);
  const [name,setName] = useState()
  const [userName,setUserName] = useState()
  const [triger,setTrigger] = useState(false)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      setPosts(res.data)
    );
  }, []);

  const postUser = () => {
    Axios.post("https://jsonplaceholder.typicode.com/users",{name:name,username:userName})
    .then(response => setPosts([...posts,response.data]))
    .then(response => setUserName([...posts,response.data]))
    .then(setTrigger(!triger))
  }
  return (
    <> 
      <div className="api">
        <Container>
        <div className="cards d-grid" >
          {posts.map(({ id, name, username }) => {
            return (
              
                <div className="card-details" key={id} >
                  <h4> <strong>Name :</strong>{name}</h4>
                  <h5> <strong>UserName :</strong>{username}</h5>
                  {/* <p>{address.city}</p> */}
                </div>
             
            );
          })}
           </div>
           <div className="post">
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <button onClick={postUser}>post</button>
           </div>
        </Container>
      </div>
    </>
  );
};

export default FakeApi;

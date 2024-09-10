import { useEffect, useState } from "react";
import postData from "../fake api/post.json";
import Rightbar from "./rightbar";
import LeftBar from "./leftbar";

function Home() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            setPosts(postData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container w-50 p-3 mt-5">
            <Rightbar/>
            <div className="">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.description}</p>
                            {/* Display the image */}
                            <img src={`${post.image}&w=350&h=350&auto=format&fit=crop`} className="card-img-bottom" alt={post.title}/>
                            <p className="card-text"><small className="text-body-secondary">Posted by {post.user}</small></p>
                        </div>
                    </div>
                ))}
            </div>
            <LeftBar/>
        </div>
    );
}

export default Home;

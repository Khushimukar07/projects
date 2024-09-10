import { useEffect, useState } from "react";
import list from "../fake api/space.json";

function Follow() {
    const [follow, setFollow] = useState([]);

    const fetchData = async () => {
        try {
            setFollow(list);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return ( 
        <div className="container w-75 p-3">
            <div>
                <h1>Build Your new Following Feed</h1>
                <p>Follow some spaces to start discovering stories in your feed</p>
            </div>
            <div>
                <h1>Discover spaces</h1>
                <br />
                <h3>Spaces you might like</h3>
                <ul className="list-group">
                    {follow.map(space => (
                        <li className="list-group-item d-flex align-items-center g-2" key={space.id}>
                            <img src={space.icon} alt={space.platform} className="rounded-circle me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                            <div>
                                <h5 className="mb-0">{space.platform}</h5>
                                <p className="mb-0">{space.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        </div>
    );
}

export default Follow;

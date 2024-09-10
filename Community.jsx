
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import followUs from "../fake api/community.json"; // Ensure this path is correct

function Community() {
    const [follow, setFollow] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFollow(followUs);
            } catch (error) {
                console.log('Error occurred:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container text-center">
            <div className="mt-4">
                <h1>Welcome to Space</h1>
                <p>Follow spaces to explore your interest on Quera</p>
                <div className="mb-4">
                    <button className="btn btn-outline-primary m-2">
                        <FontAwesomeIcon icon={faPlusCircle} /> Create a Space
                    </button>
                    <button className="btn btn-outline-primary m-2">
                        <FontAwesomeIcon icon={faCompass} /> Discover Space
                    </button>
                </div>
            </div>
            <h1 className="mt-5">Discover Spaces</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                {follow.map((followItem, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <img
                                src={followItem.icon}
                                style={{ width: '100%', height: '200px' }}
                                className="card-img-top img-fluid"
                                alt={followItem.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{followItem.title}</h5>
                                <p className="card-text">{followItem.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Community;

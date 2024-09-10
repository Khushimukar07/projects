import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faHashtag, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Rightbar() {
    return (
        <div
            className="position-fixed top-0 end-0 mt-5 me-5 p-3 pt-5"
            style={{ width: '300px', height: 'calc(100vh - 3rem)'}}
        >
           
            <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '40px', color: '#007bff' }} />
                    <div className="ms-3">
                        <h5 className="mb-1">Khushi</h5>
                        <p className="mb-0 text-muted">Khushi@example.com</p>
                    </div>
                </div>
                <Link className="btn btn-outline-primary w-100 mb-2" to="#">
                    View Profile
                </Link>
                <Link className="btn btn-outline-secondary w-100" to="#">
                    Settings
                </Link>
            </div>

          
            <div className="mb-4">
                <h5 className="mb-3">Trending Topics</h5>
                <ul className="list-group">
                    {['React', 'JavaScript', 'Web Development', 'Tech News'].map((topic, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            <FontAwesomeIcon icon={faHashtag} style={{ color: '#007bff' }} className="me-2" />
                            {topic}
                            <span className="badge bg-primary rounded-pill">New</span>
                        </li>
                    ))}
                </ul>
            </div>

           
            <div>
                <h5 className="mb-3">Quick Actions</h5>
                <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faBell} style={{ color: '#007bff' }} className="me-2" />
                        <Link to="#" className="text-decoration-none text-dark">Notifications</Link>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faCog} style={{ color: '#007bff' }} className="me-2" />
                        <Link to="#" className="text-decoration-none text-dark">Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;

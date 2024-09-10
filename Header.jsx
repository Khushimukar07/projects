
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faPencilSquare, faUserGroup, faTableList, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const getClassName = (path) => location.pathname === path || (location.pathname === '/' && path === '/home') ? 'text-danger' : 'text-white';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to='/home' style={{ fontSize: '35px', fontWeight: 'bold', color: 'red',fontFamily:'serif' }}>
                    Quera
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${getClassName('/home')}`} to='/home'>
                                <FontAwesomeIcon icon={faHome} style={{ fontSize: '24px' }} />
                                <span className="d-none d-lg-inline ms-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getClassName('/follow')}`} to='/follow'>
                                <FontAwesomeIcon icon={faTableList} style={{ fontSize: '24px' }} />
                                <span className="d-none d-lg-inline ms-2">Follow</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getClassName('/community')}`} to='/community'>
                                <FontAwesomeIcon icon={faUserGroup} style={{ fontSize: '24px' }} />
                                <span className="d-none d-lg-inline ms-2">Community</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getClassName('/answer')}`} to='/answer'>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ fontSize: '24px' }} />
                                <span className="d-none d-lg-inline ms-2">Answer</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getClassName('/notification')}`} to='/notification'>
                                <FontAwesomeIcon icon={faBell} style={{ fontSize: '24px' }} />
                                <span className="d-none d-lg-inline ms-2">Notifications</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center ms-auto">
                        <form className="d-flex me-3">
                            <input className="form-control" type="search" placeholder="Search Quera" aria-label="Search" />
                        </form>
                        <button className='btn btn-outline-light rounded-pill me-2'>
                            Try Quera +
                        </button>
                        <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '24px', color: 'white' }} className="me-2" />
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '24px', color: 'white' }} className="me-2" />
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Ask Question
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;

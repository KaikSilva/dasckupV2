import { Link } from "react-router-dom";

/**
 * 
 * @param {*} props 
 * @returns 
 */
function Container(props){
    return (
        <div className="app-container">
            <div className="search">
            <form>
                <input className="form-control" type="text" placeholder="Type here..." aria-label="Search" />
            </form>
            <a href="#" className="toggle-search"><i className="material-icons">close</i></a>
        </div>
        <div className="app-header">
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-nav" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link hide-sidebar-toggle-button" href="#"><i className="material-icons">first_page</i></a>
                            </li>
                            <li className="nav-item dropdown hidden-on-mobile">
                                <a className="nav-link dropdown-toggle" href="#" id="addDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="material-icons">add</i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="addDropdownLink">
                                    <li><a className="dropdown-item" href="#">New Workspace</a></li>
                                    <li><a className="dropdown-item" href="#">New Board</a></li>
                                    <li><a className="dropdown-item" href="#">Create Project</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-on-mobile">
                                <a className="nav-link dropdown-toggle" href="#" id="exploreDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="material-icons-outlined">explore</i>
                                </a>
                                <ul className="dropdown-menu dropdown-lg large-items-menu" aria-labelledby="exploreDropdownLink">
                                    <li>
                                        <h6 className="dropdown-header">Repositories</h6>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <h5 className="dropdown-item-title">
                                                Neptune iOS
                                                <span className="badge badge-warning">1.0.2</span>
                                                <span className="hidden-helper-text">switch<i className="material-icons">keyboard_arrow_right</i></span>
                                            </h5>
                                            <span className="dropdown-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <h5 className="dropdown-item-title">
                                                Neptune Android
                                                <span className="badge badge-info">dev</span>
                                                <span className="hidden-helper-text">switch<i className="material-icons">keyboard_arrow_right</i></span>
                                            </h5>
                                            <span className="dropdown-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-btn-item d-grid">
                                        <button className="btn btn-primary">Create new repository</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
        
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item hidden-on-mobile">
                                <a className="nav-link active" href="#">Applications</a>
                            </li>
                            <li className="nav-item hidden-on-mobile">
                                <a className="nav-link" href="#">Reports</a>
                            </li>
                            <li className="nav-item hidden-on-mobile">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link toggle-search" href="#"><i className="material-icons">search</i></a>
                            </li>
                            <li className="nav-item hidden-on-mobile">
                                <a className="nav-link language-dropdown-toggle" href="#" id="languageDropDown" data-bs-toggle="dropdown"><img src="../../assets/images/flags/us.png" alt="" /></a>
                                    <ul className="dropdown-menu dropdown-menu-end language-dropdown" aria-labelledby="languageDropDown">
                                        <li><a className="dropdown-item" href="#"><img src="../../assets/images/flags/germany.png" alt="" />German</a></li>
                                        <li><a className="dropdown-item" href="#"><img src="../../assets/images/flags/italy.png" alt="" />Italian</a></li>
                                        <li><a className="dropdown-item" href="#"><img src="../../assets/images/flags/china.png" alt="" />Chinese</a></li>
                                    </ul>
                            </li>
  
                            <li className="nav-item hidden-on-mobile">
                                <a className="nav-link nav-notifications-toggle" id="notificationsDropDown" href="#" data-bs-toggle="dropdown">4</a>
                                <div className="dropdown-menu dropdown-menu-end notifications-dropdown" aria-labelledby="notificationsDropDown">
                                    <h6 className="dropdown-header">Notifications</h6>
                                    <div className="notifications-dropdown-list">
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-info text-white">
                                                        <i className="material-icons-outlined">campaign</i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p className="bold-notifications-text">Donec tempus nisi sed erat vestibulum, eu suscipit ex laoreet</p>
                                                    <small>19:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-danger text-white">
                                                        <i className="material-icons-outlined">bolt</i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p className="bold-notifications-text">Quisque ligula dui, tincidunt nec pharetra eu, fringilla quis mauris</p>
                                                    <small>18:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-success text-white">
                                                        <i className="material-icons-outlined">alternate_email</i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>Nulla id libero mattis justo euismod congue in et metus</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge">
                                                        <img src="../../assets/images/avatars/avatar.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>Praesent sodales lobortis velit ac pellentesque</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge">
                                                        <img src="../../assets/images/avatars/avatar.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>Praesent lacinia ante eget tristique mattis. Nam sollicitudin velit sit amet auctor porta</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
  
  
                            <li >
                                <Link style={{color:"var(--bs-danger)"}} className="nav-link" to="/logout"><i className="material-icons-two-tone">power_settings_new</i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

            <div className="app-content">
                {props.children}
            </div>
        </div>
    )
}

export default Container;
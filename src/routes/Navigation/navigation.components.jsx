import { Fragment } from 'react';
import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logocontainer-' to='/store'>
                    My Logo Component
                </Link>
                <div className='nav-links-container'>
                    <h1>Navigation will be up here including links and account settings.</h1>
                </div>
               
            </div>
            
            <Outlet />
        </Fragment>
    )

}

export default Navigation;
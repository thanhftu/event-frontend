import * as React from "react";
import {Link} from "react-router-dom";

// export interface NavigationProps {
//     brandName: string;
// }

const Navigation =({brandName})=> {
    
        return <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>*/}
                    <Link to="/" className="navbar-brand">{brandName}</Link>
                </div>

                {/*<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">*/}
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Events</Link></li>
                    </ul>
                {/*</div>*/}
            </div>
        </nav>
    
}

export default Navigation
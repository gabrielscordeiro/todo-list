import logoImg from '../../assets/logo.svg'

import { BrowserRouter as Router, Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Router>
            <Link to="/">
                <h1 title="ToDo List">
                    <img
                        src={logoImg}
                        alt="ToDo List"
                        title="ToDo List"
                        draggable={false}
                        width={126}
                        height={48}
                    />
                </h1>
            </Link>
        </Router>
    )
}
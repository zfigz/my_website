import React from 'react';
import PropTypes from 'prop-types';

import resume from '../images/IanHundereResume.pdf';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="content">
            <div className="inner">
                <h1>Ian Hundere</h1>
                <h2>DevOps</h2>
                <h2>SRE</h2>
                <h2>Cloud</h2>
            </div>
            <h2>Engineer</h2>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('intro');
                        }}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('work');
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
};

export default Header;

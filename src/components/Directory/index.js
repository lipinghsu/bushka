import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Directory = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='directory'>
            <div className='wrap'>
                <div className='item'>
                    <div className='inner-wrap'>
                        <Link to={'/search'}>
                            <div className='item-logo'>
                                <div className="scan-line"></div> {/* Add scan line div */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directory;

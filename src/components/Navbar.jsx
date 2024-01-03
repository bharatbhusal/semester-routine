import React from 'react';

const NavBar = ({ activeDay, handleDay }) => {

    return (
        <nav>
            <div className={`day ${activeDay === 'Mon' ? 'active' : ''}`} onClick={handleDay}>
                Mon
            </div>
            <div className={`day ${activeDay === 'Tue' ? 'active' : ''}`} onClick={handleDay}>
                Tue
            </div>
            <div className={`day ${activeDay === 'Wed' ? 'active' : ''}`} onClick={handleDay}>
                Wed
            </div>
            <div className={`day ${activeDay === 'Thur' ? 'active' : ''}`} onClick={handleDay}>
                Thur
            </div>
            <div className={`day ${activeDay === 'Fri' ? 'active' : ''}`} onClick={handleDay}>
                Fri
            </div>
        </nav>
    );
};

export default NavBar;

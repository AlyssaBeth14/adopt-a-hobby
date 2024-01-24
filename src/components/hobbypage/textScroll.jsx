import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const MyComponent = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const position = element.offsetTop;
            scroll.scrollTo(position, {
                duration: 800,
                smooth: 'easeInOutQuart',
            });
        }
    };

    return (
        <div>
            <nav style={{
                position: 'fixed',
                top: '0',
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
                <button onClick={() => scrollToSection('Arts')}>Arts</button>
                <button onClick={() => scrollToSection('Athletics')}>Athletics</button>
                <button onClick={() => scrollToSection('Crafts')}>Crafts</button>
            </nav>


            <div id="Arts" style={{ height: '600px', backgroundColor: 'lightred' }}>Art Section</div>
            <div id="Athletics" style={{ height: '400px', backgroundColor: 'lightgreen' }}>Athletics Section</div>
            <div id="Crafts" style={{ height: '1500px', backgroundColor: 'purple' }}>Craft Section</div>

        </div>
    );
};

export default MyComponent;
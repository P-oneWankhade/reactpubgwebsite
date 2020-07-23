import React from 'react';
import Two from '../src/images/2.jpeg';
import Common from './Common';

const About = () => {
    return(
        <>
            <Common  
                title='Play better and Earn Money'
                info='Play with us and make your lockdown better'
                link='/service'
                btn='Check Services'
                imgsrc={Two}
            />
        </>
    )
}

export default About;
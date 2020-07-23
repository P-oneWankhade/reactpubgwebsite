import React from 'react';
import One from '../src/images/1.jpg';
import Common from './Common';

const Home = () => {
    return(
        <>
            <Common  
                title={`Welcome to world of`}
                info='Play with us and make your lockdown better'
                link='/about'
                btn='Get Started'
                imgsrc={One}
            />
        </>
    )
}

export default Home;
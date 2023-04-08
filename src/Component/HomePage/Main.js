import React from 'react';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import StoreCollection from './StoreCollection/StoreCollection';
import Traverse from './Traverse/Traverse';
import Clothes from './Clothes/Clothes';
import Sunglass from './Sunglass/Sunglass';
import Jewelry from './Jewelry/Jewelry';
import Fitness from './Fitness/Fitness';
import Prority from './Fitness/Prority/Prority';
import AddFitness from './AddFitness/AddFitness';
import Footer from './Footer/Footer';



const Main = () => {
    return (
        <div>
            <div className="bg">
                <Navbar></Navbar>
                <Slider />
                <StoreCollection />
                <Traverse></Traverse>
                <Clothes />
                <Sunglass></Sunglass>
                <Jewelry />
                <Fitness></Fitness>
                <Prority />
                <AddFitness />

            </div>
            <div className="bg2">
                <Footer />
            </div>
        </div>
    );
};

export default Main;

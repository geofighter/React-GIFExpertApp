import React, { useState } from 'react';
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mario Kart']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <Addcategory setCategories={ setCategories } />
            

        
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    )) 
                }
            </ol>
            

        </>
    );



}

export default GifExpertApp;
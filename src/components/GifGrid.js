import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    //se renombra en la desestructiración con dos puntos y el nombre nuevo a usar "data:images"
    const { data:images, loading } = useFetchGifs( category );
    
    
    return (
        <>
            <h3 className='titulo-categoria'>Mostrando Gifs de: { category } </h3><hr></hr>
            
            { loading && <p className='titulo-categoria animate__animated animate__flash animate__slow'> Cargando... </p> }

            <div className='card-grid'>
                <ol>
                    
                        {
                            images.map( img => (
                                <GifGridItem 
                                    key={ img.id }
                                    { ...img }
                                />
                            ))
                        }
                    
                    
                </ol>
            </div>
        </>
    )
}

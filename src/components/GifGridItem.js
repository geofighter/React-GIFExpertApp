import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    //console.log({id, title, url});

    return (
        <div className='card animate__animated animate__fadeIn'>
            <div className='head-card'>
                <p> { title === '' ? 'GIF Sin título' : title.toUpperCase() } </p>
            </div>
            <div className='content-card'>
                <img src={ url } alt={ title } />
            </div>    
        </div>
    )
}
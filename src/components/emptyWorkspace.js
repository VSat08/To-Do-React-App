import React from 'react'
import bggif from '../imgs/bggif.gif'

export default function EmptyWorkspace() {
    return (
        // <video controls width="100%">

        //     <source src={videoClip} type="video/mp4"
        //     />

        // </video>
        <img height={200} className='emptyspaceimg' alt='No Work Space' src={bggif} />
    )
}

import React from 'react'
import { useRef } from 'react'

function KittyGallery() {
    const galleryRef = useRef(null)
    const index = useRef(0)
    function handleScroll(){
        const imageList = galleryRef.current.querySelectorAll(".image");
        index.current = index.current+1 >= imageList.length ? 0:index.current+1
        imageList[index.current].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
  return (
    <div>
        <h2>Kitty Gallery</h2>
        <button onClick={handleScroll}>Next</button>
        <ul ref={galleryRef} className='gallery'>
            <li className='image'><img src="http://placekitten.com/g/300/300" alt=""  /></li>
            <li className='image'><img src="http://placekitten.com/g/250/350" alt=""  /></li>
            <li className='image'><img src="http://placekitten.com/g/200/300" alt=""  /></li>
        </ul>
    </div>
  )
}

export default KittyGallery
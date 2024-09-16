import React from 'react'

const ImageGrid = (props) => {
    return (
         <div className="grid-item">
              <a
                href={props.image}
                data-lightbox="gridImage"
              >
                <img
                  src={props.image}
                  alt=""
                />
              </a>
            </div>
  )
}

export default ImageGrid
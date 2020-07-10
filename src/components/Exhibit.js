import React from 'react';

function Exhibit(props) {
    return(
        <div className="d-inline-block g-card" >
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        </div>
    );
}

export default Exhibit;

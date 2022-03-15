import React from 'react';
import './card-style.css';
const Card = props => {
return(

    <div className="card text-center">

        <div className="overflow">
            <img src={props.imgsrc} alt="Image 1" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
            <h4 className="cardtitle">{props.title}</h4>
            <h6 className="carddate">{props.date}</h6>
            <p className='carAuthor'>{props.author}</p>
            <p className="card-text text-secondary">{props.blurb}</p>
            <a href="#" className="btn btn-outline-success">Go Anywhere</a>
        </div>
    </div>

);


}

export default Card;
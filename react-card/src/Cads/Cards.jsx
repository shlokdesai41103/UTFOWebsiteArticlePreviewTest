import React, {Component} from 'react'
import Card from './CardUI';

import img1 from '../assets/GoogleDevML.png';


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="article1" date="dd/mm/yyyy" blurb="Article Summary Here"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="article2" date="dd/mm/yyyy" blurb="Article Summary Here"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="article3" date="dd/mm/yyyy" blurb="Article Summary Here"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
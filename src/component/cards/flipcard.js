import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from 'react-bootstrap/Card';
import data from '../../Resources/data.json';
import flipcardcss from './cards.module.css';
const imagePath = '/images';
function Flipacrd() {
    const [flip, setFlip] = useState(false);
    const [index, setIndex] = useState(Math.floor(Math.random() * 200))
    const [frontText, setFrontText] = useState("every click you will get something new")
    const [backText, setBackText] = useState("every click you will get something new")
    const [iNo , setINo] = useState(Math.floor(Math.random() * 10)+1)
    const [fImagePath, setFImagePath]  = useState(imagePath+"/"+iNo+".jpg")
    const [lImagePath, setLImagePath] =  useState(imagePath+"/"+iNo+".jpg")
    return (
        <ReactCardFlip isFlipped={flip}
            flipDirection="horizontal">
            <Card style={{ width: '18rem'}} className={"mb-2 "+ flipcardcss.flipcardCss}
             onClick={() => {
                setFlip(!flip)
                setIndex(Math.floor(Math.random() * 200))
                setBackText(data.quote[index])
                setINo(Math.floor(Math.random() * 10)+1)
                setLImagePath(imagePath+"/"+iNo+".jpg")
            }}>
                <Card.Img src={fImagePath} style={{ width: '18rem' ,height:'20rem'}}/>
                <Card.ImgOverlay>
                    <Card.Title >A wish For You</Card.Title>
                    <Card.Text>
                        {frontText}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card style={{ width: '18rem' }} className="mb-2" onClick={() => {
                setFlip(!flip)
                setIndex(Math.floor(Math.random() * 200))
                setFrontText(data.quote[index])
                setINo(Math.floor(Math.random() * 10)+1)
                setFImagePath(imagePath+"/"+iNo.toString()+".jpg")
            }}>
                <Card.Img src={lImagePath} style={{ width: '18rem' ,height:'20rem'}}/>
                <Card.ImgOverlay>
                    <Card.Title>A wish For You</Card.Title>
                    <Card.Text>
                        {backText}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </ReactCardFlip>
    );
}

export default Flipacrd;

import React, { useEffect,useState } from "react";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import {Card} from 'react-bootstrap';

function Demo2() {
    // const [text, setText]=useState('Sumago!');
    // const [demo2, setDemo2]=useState('Sumago!')
    //     const [card, setCard]=useState({
    //       title:'Online House Rental System',
    //       teamlead:'teamlead:Shreya Varade ',
    //       teammember:'teammember:Shantanu Sonawane'}
    const [count,setCount] =useState (0);
    useEffect(()=>{
      setTimeout(()=>{
        setCount((count)=> count +1)
      },1)
    })
  return (
    <>
    <h1>Count is ={count}</h1>
      {/* <h1>{text}</h1>
      <h2>{Demo2}</h2>
      <h2>{card.Title}</h2>
      <h2>{card.teamlead}</h2>
      <h2>{card.teammember}</h2>


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.teamlead}
        
        </Card.Text>
        <Button variant="primary"onClick={() =>setCard('OnClick Value')}>click here</Button>
      </Card.Body>
    </Card>
      <button type="button" onClick={() =>setDemo2('OnClick Value')}>click here</button> */}
      
    </>
  );
}

export default Demo2;
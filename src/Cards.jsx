import React from 'react';


const Card = (props) => 
{
  return (
    <>
     <div className="card" style={{width:350}}>
       <img className="card-img-top" src={props.imgsrc} alt="series" style={{width:350,height:250}} />
       <div className="card-body" style={{backgroundColor: 'purple'}}>
         <h4 className="card-title" style={{color:'whitesmoke',fontWeight:'bold'}}><center>{props.sname}</center></h4>
         <p className="card-text" style={{color:'whitesmoke'}}><center>{props.seasons}</center></p>
        <center><a href={props.links} className="btn btn-danger">Watch Now</a></center> 
       </div>
     </div>&nbsp;&nbsp;
   </>
  );
}

export default Card;
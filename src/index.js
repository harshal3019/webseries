import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdatas from './Sdata';
import './index.css';
const heading = {
  fontSize:45,
  textAlign:'center',
  paddingTop:5,
  fontWeight:'bold',
  fontFamily:'serif',
  textDecoration:'underline', 
}
const nmap = (val) => 
{
  return(
 //console.log(val);
 <Card
  imgsrc = {val.imgsrc}
  sname = {val.sname}
  seasons = {val.seasons}
  links = {val.links}
  />
  );

}
ReactDOM.render(
  <>

<p style={heading}>Top 10 Favourite Web Series</p>
<div className="container">
    <div className="row" style={{marginLeft:5}}>
    {Sdatas.map(nmap)}
</div>
</div>
 
 
  </>,
  document.getElementById('root')
);
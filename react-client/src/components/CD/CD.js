import React from 'react';
import './CD.css';
import './BBBCover.png';
import './BBB3.jpg'
import {NavLink} from 'react-router-dom';


export class CD extends React.Component{
	render(){
		let item = this.props.location.state.CD;
		return (
			<div className="CD" >
				<div className="ACD">
					<h1> {item.CDName} </h1>
					<h2> {item.Desc} </h2>
					<img src={require('./BBBCover.png')} />
				</div>
			</div>
		)
	}
}


export default CD;


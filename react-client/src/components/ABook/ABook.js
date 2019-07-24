import React from 'react';
import './ABook.css';
import './BBBCover.png';
import './BBB3.jpg';
import {NavLink} from 'react-router-dom';


export class ABook  extends React.Component {


	render(){
		let BookName = this.props.location.state.BookName;
		let BookDesc = this.props.location.state.BookDesc; 
		let item = "Barcelona The Beautiful Bones";
		return (
			<div className="ABook">
				ABooks.
				Barcelona, The Beautiful Bones can be puchased at amazon.com in both e-book and hardcopy.
				<div className="TheBook">
					<h1>{BookName}</h1>
					<h3>{BookDesc}</h3>
					<img src={require('./BBBCover.png')} />
				</div>
			</div>
		)
	}
}

export default ABook 

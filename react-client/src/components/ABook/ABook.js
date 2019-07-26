import React from 'react';
import './ABook.css';
import './BBBCover.png';
import './BBB3.jpg';
import {NavLink} from 'react-router-dom';


export class ABook  extends React.Component {


	render(){
		let item     = this.props.location.state.Book;
		return (
			<div className="ABook">
				<div className="TheBook">
					<h1>{item.BookName}</h1>
					<h3>{item.BookDesc}</h3>
					<img src={require('./BBBCover.png')} />
				</div>
			</div>
		)
	}
}

export default ABook 

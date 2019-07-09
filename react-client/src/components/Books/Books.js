import React from 'react';
import './Books.css';
import './BBBCover.png';
import './BBB3.jpg';


export class Books  extends React.Component {



	render(){

		let art = [ 'jumper',  'red', 'medium', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' ];

		let  test = art[1];

		return (
			<div className="Books">
				Books.
				Barcelona, The Beautiful Bones can be puchased at amazon.com in both e-book and hardcopy.
				San Francisco, Sirens In The Ferns, will be released shortly.
				<div className="TheBooks">
				{art.map((item) => (
					<div className="ABook">
					<h1>{item} </h1>
					<img src={require('./BBBCover.png')} />
					</div>
					))} 
				</div>
			</div>

		)
	}
}

export default Books 

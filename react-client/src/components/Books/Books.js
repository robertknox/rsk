import React from 'react';
import './Books.css';
import './BBBCover.png';
import './BBB3.jpg';
import '../ABook/ABook.js';
import {Link} from 'react-router-dom';


export class Books  extends React.Component {



	render(){

		let art = ['BBB','SFSF'];
		let  test = art[1];

		return (
			<div className="Books">
				Books.
				Barcelona, The Beautiful Bones can be puchased at amazon.com in both e-book and hardcopy.
				San Francisco, Sirens In The Ferns, will be released shortly.
				<div className="TheBooks">
				{art.map((item) => (
					<div className="ABook">
					<h1>{item}</h1>
					<Link to={{
						pathname:"/ABook/" + item,
						state: {
							BookName: "Barcelona, The Beautiful Bones",
							BookDesc: "Explanation of book. Many lines. Maybe 500 chars. It was on and on."
							}
						}} params={{bookName: "BBB"}} >	
					<img src={require('./BBBCover.png')} />
					</Link>
					</div>
				))} 
				</div>
			</div>
		)
	}
}

export default Books 

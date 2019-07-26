import React from 'react';
import './Books.css';
import './BBBCover.png';
import './BBB3.jpg';
import '../ABook/ABook.js';
import {Link} from 'react-router-dom';


export class Books  extends React.Component {



	render(){

		let book_ar = [
				{ BookTitle:'BBB',
				BookDesc: "An American English teacher must navigate the dangerous street of Barcelona to find a killer",
				BookName:"Barcelona,The Beautiful Bones"},
				{ BookTitle:'SFSF',
				BookDesc: "Returning to San Francisco after visting his dying father, Thomas Kerr sees a woman in the road. Half beaten to death and with severe head trama, she sets off to save her daughter; There is a problem. She can't remember her daughter's name, or anything abot her.",
				BookName:"San Francisco,Sirens In The Ferns"}
		];

		return (
			<div className="Books">
				Books.
				Barcelona, The Beautiful Bones can be puchased at amazon.com in both e-book and hardcopy.
				San Francisco, Sirens In The Ferns, will be released shortly.
				<div className="TheBooks">
				{book_ar.map((item) => (
					<div className="ABook">
					<h1>{item.BookName}</h1>
					<Link to={{
						pathname:"/ABook/" + item.BookTitle,
						state: {
							BookName: item.BookName, 
							BookDesc: item.BookDesc,
							Book: item
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

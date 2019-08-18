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
				BookName:"Barcelona, The Beautiful Bones"},
				{ BookTitle:'SFSF',
				BookDesc: "Returning to San Francisco in order to stend time with his dying father, Thomas Kerr sees a woman in the road. Half beaten to death and with severe head trama, she sets off to save her daughter; There is a problem. She can't remember her daughter's name, or anything abot her.",
				BookName:"San Francisco, Sirens In The Ferns"},
				{BookTitle:"RRV",
				BookDesc: "An American, on a vist to Reykvajik, falls into a web of insane ritualistic killers.",
				BookName:"Reykvajik, Rite of Vikings"}
		];

		return (
			<div className="Books">
				<h1>Books</h1>
				<div className="TheBooks">
				{book_ar.map((item) => (
					<div className="ABook">
					<h3>{item.BookName}</h3>
					<Link to={{
						pathname:"/ABook/" + item.BookTitle,
						state: {
							BookName: item.BookName, 
							BookDesc: item.BookDesc,
							Book: item
							}
						}}
						params={{bookName: "BBB"}} >	
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

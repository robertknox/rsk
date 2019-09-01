import React from 'react';
import './Audio_Books.css';
import {Link} from 'react-router-dom';


export class Audio_Books extends React.Component {

	render(){

		let a_books_array = [{
			name: "foo",
			desc:  "Blah blah",	
		},
		{
			name: "foo2",
			desc: "blah blah blah",
		},
		{
			name: "foo",
			desc: "Blah blah",	
		},];

		return (
			<div className="Audio_Books_Title">
				<h1> Audio Books </h1>
				<div className="Audio_Books">
					{ a_books_array.map((item) => (
						<div className="Audio_Book">
							<Link to={{
									pathname:"/Audio_Book/" + item.name,
									state:{
										name:item.name,
										desc:item.desc,
										Audio_Book:item
									}
								}}>
								<h2> {item.name } </h2>
								<img src={require("./BBBCover.png")}/>
							</Link>
						</div>
					))}
				</div>
			
			</div>

		)
	}
}

export default Audio_Books; 

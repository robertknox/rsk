import React from 'react';
import './Audio_Books.css';


export class Audio_Books extends React.Component {


	render(){

		let a_books_array = [{
			audio_book_title: "foo",
			audio_bood_desc:  "Blah blah",	
		},
		{
			audio_book_title: "foo2",
			audio_book_desc: "blah blah blah",
		},
		{
			audio_book_title: "foo",
			audio_book_desc:  "Blah blah",	
		}];

		return (
			<div className="Audio_Books">
				<h1> Audio Books </h1>
			</div>

		)
	}
}

export default Audio_Books; 

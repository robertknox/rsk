import React from 'react';
import './Audio_Book.css';


export class Audio_Book extends React.Component {

	render(){
		
		return(
			<div className="Audio_Book_Top">
				<div className="Audio_Book">
					<h1> Audio Book </h1>
					<img src={require("./BBBCover.png")}/>
				</div>
			</div>
		)
	}
}

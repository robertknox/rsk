import React from 'react';
import './Author.css';
import me from './me.jpg';

export class Author  extends React.Component {
	render(){
	   return (
		<div className="Author">

			<div className="AuthorPicture">
				<img src={me}/>
			</div>
			<div className="AuthorText">
			Robert Selkirk Knox spent five years in Barcelona after garduating from the University of California and Santa Cruz. He was there to witness firsthand the Catalonia's struggle to regain its language and cluture after Franco's repressive dictatiorship.  
                	</div>
		</div>
	    );
	}
}


export default Author;

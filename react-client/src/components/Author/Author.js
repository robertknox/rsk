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
				<p>Robert Selkirk Knox spent five years in Barcelona after garduating from the University of California at Santa Cruz. He was there to witness firsthand the Catalonia's struggle to regain its language and cluture after Franco's repressive dictatiorship. These experiences were captured in his novel: Barcelona, The Beautiful Bones.
				</p>
				<p>After returning to San Francisco, where he spent five years, he reaquinted himself with his native country. The novel San Francisco, Sirens in the Ferns reflects some of these experiences.
				</p>

				<p>Each novel in the Cites series attempts to convey the history and ambiance of a unique local while providing a mystery to drive the narative. The novels novels attempt to capture the spirit of the city in which they takes place. Barcelona, The Beautiful Bones and San Francisco, Sirens in the Ferns are available for sale. Reysivik, Rite of Vikings, will be available shortly.
				</p>
				<p>
				In addition to his litarary production, Robert Selkirk Knox is an active musician, working in the jazz/pop genre. Check out some of his more recent albums.
				</p>  
                	</div>
		</div>
	    );
	}
}


export default Author;

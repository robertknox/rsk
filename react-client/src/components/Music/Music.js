import React from 'react';
import './Music.css';


export class Music extends React.Component {
	render(){

	   let music_array = [{title: "Barraca Leblon"},
		{title: "Reaching Back to ScottLand"},
		{title: "Rock and Roll -- A long time ago."}
	   ];
	   return (
		<div className="Music">
		       <h1>Music CDs Available</h1>
                </div>
	    );
	}
}


export default Music;

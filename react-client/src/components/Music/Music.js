import React from 'react';
import './Music.css';


export class Music extends React.Component {
	render(){

	   let music_array = [{title: "Barraca Leblon"},
		{title: "Reaching Back to ScottLand"},
		{title: "Rock And Roll -- A roll and a rock."}, 
	   ];

	   return (
		<div className="Music">
		       <h1>Music CDs Available</h1>
			{music_array.map((item) => (
				<div class="A_CD">			
				<h2>{ item.title} </h2>
				<img src={require("./BBBCover.png")}/>
				</div>
			))}
                </div>
	    );
	}
}


export default Music;

import React from 'react';
import './Music.css';
import {Link} from 'react-router-dom';


export class Music extends React.Component {
	render(){

	   let music_array = [{title: "Barraca Leblon", CDName: "Barraca Leblon", Desc: "Bossa Nova, America Twist"},
		{title: "Reaching Back to ScottLand",         CDName:"test", Desc: "Test Desc"},
		{title: "Rock And Roll -- A Roll And A Rock.",CDName:"test", Desc: "Test2 Desc"}, 
	   ];

	   return (
		<div className="Music">
		       <h1>Music CDs Available</h1>
			<div className="CDs" >
			{music_array.map((item) => (
				<div className="CD">
				<Link to={{
					pathname:"/CD/" + item.CDName,
					state: {
						CDName: item.CDName,
						Desc: item.Desc,
						CD: item
					} 
					 }} params={{CDName: "test"}} >			
					<h2>{item.title} </h2>
					<img src={require("./BBBCover.png")}
					params={{CDName:"BBB"}}/>
				</Link>
				</div>
			))}
			</div>
                </div>
	    );
	}
}


export default Music;

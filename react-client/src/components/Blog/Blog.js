import React from 'react';
import './Blog.css'

export class Blog extends React.Component {
	render(){
	   console.log("In Blog");
	   return (
		<div className="Blog">
			Blog

			<div className='BlogEntry'>
				Test Blog Entry 1
				Test Blog Entry 1
				Test Blog Entry 1
				Test Blog Entry 1
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 2
				Test Blog Entry 2
				Test Blog Entry 2
				Test Blog Entry 2
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
			<div className='BlogEntry'>
				Test Blog Entry 3
			</div> 
                </div>
	    );
	}
}


export default Blog;

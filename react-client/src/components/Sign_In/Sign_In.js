import React, {Component} from 'react';
import './Sign_In.css'

export class Sign_In extends Component {

	constructor(props) {
    		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    		this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }	

	handleSubmit(e){
		alert("MailingList: handleSubmit");
		e.preventDefault();
	}

	render(){
	   return (
		<div className="Sign_In">
			<form onSubmit={this.handleSubmit}>
				<h3> Sign In to access account.</h3>
				<br/>
				<label>
					User_Name:
					<input type="text" value="" />
					Password:
					<input type="text" /> 
				</label>
				<input type="submit" value="Submit" />
				
			</form>	
                </div>
	    );
	}
}


export default Sign_In;

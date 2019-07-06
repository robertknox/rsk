import React, {Component} from 'react';
import './Mailing_List.css';

export class Mailing_List extends Component {

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
		<div className="Mailing_List">
			<form onSubmit={this.handleSubmit}>
				<h3> Enter name and email to receive updates on upcoming events. </h3>
				<br/>
				<label>
					Name:
					<input type="text" value="" />
					Email:
					<input type="text" /> 
				</label>
				<input type="submit" value="Submit" />
				
			</form>	
                </div>
	    );
	}
}


export default Mailing_List;

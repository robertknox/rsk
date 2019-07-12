import React, {Component} from 'react';
import './Sign_In.css'

export class Sign_In extends Component {

	constructor(props) {
    		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
		this.handleSignOutButton = this.handleSignOutButton.bind(this);
    		this.handleClearForm = this.handleClearForm.bind(this);
		this.state = {
			user:  "foo",
			pass:  "foo",
			authenticated: false,
		}
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }	

	handleSubmit(e){
		alert("Sign_In: handleSubmit:user:pass:" + this.state.user + ":" + this.state.pass);
		e.preventDefault();
		if ((this.state.user === "Joaquim") && (this.state.pass === "Julia")){
			alert("Sign_In:handleSubmit:Authenticated"+this.state.pass);
			this.setState({authenticated:  true});
		} else {
			alert("Sign_In:handleSubmit: Not Authenticated:" + this.state.pass);
			this.setState({authenticated: false});
		}
	}

        handleChangeUser(e){
		this.setState({user : e.target.value});
        }

        handleChangePass(e){
		this.setState({pass : e.target.value});
        }

        handleSignOutButton(e){
		alert("handleButton:handleSubmit:user:pass:" + e.target.value );
		this.setState({authenticated: false});
        }
	render(){

          let button;
	  console.log(this.state.authenticated);		
	  if ( this.state.authenticated ){
	       button = <button className="Sing_Out_Button" onClick={this.handleSignOutButton}> Sign Out </button>
	   } else {
		button = <h2> User is not Authenticated </h2>
	   }
	   return (
		<div className="Sign_In">
		        {button}	
			<form onSubmit={this.handleSubmit}>
				<h3> Sign In to access account.</h3>
				<br/>
				<label>
					User_Name:
					<input type="text" value={this.state.user} onChange={this.handleChangeUser} />
					Password:
					<input type="text" value={this.state.pass} onChange={this.handleChangePass}/> 
				</label>
				<input type="submit" value="Submit" />
				
			</form>	
                </div>
	    );
	}
}


export default Sign_In;

import React from 'react';
import './SearchBar.css';

const sortByOptions = {
'Best Match': 'best_match',
  'News': 'rating',
  'Books': 'books',
  'Mailing List': 'review_count'
}


class SearchBar extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match' 
		}

		this.handleLocationChange.bind(this);
		this.handleTermChange.bind(this);
		this.handleSearchYelp.bind(this)
	}


	handleSearchYelp(event){
	   this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
	   event.preventDefault()
	   
	}

	getSortByClass(sortByOption){
 		if (sortByOption === this.state.sortBy){
			console.log("getSortByClass:" + sortByOption + " is active");
			return 'active';
		}
		else return ''
	}

	handleSortByChange( sortByVal){
		this.setState({sortBy: sortByVal });
	}

	handleTermChange( event ){
		this.setState({term: event.target.value });
	}


	handleLocationChange( event ){
		this.setState({location: event.target.value });
	}

	renderSortByOptions(){

	return (
		Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
		})
	)
	}

	render(){
	return (
<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()} 
    </ul>
  </div>
</div>

	)
	}
}

export default SearchBar

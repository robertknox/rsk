import React from 'react';
import './Author.css';

const sortByOptions = {
  'About The Author': 'author',
  'Galley':'galley',
  'Guest Book': 'guest_book',
  'News Letter': 'news_letter',
  'News': 'news',
  'Books': 'books',
  'Audio Books': 'audio_books',
  'Music': 'music',
  'Mailing List': 'mailing_list'
}


class Author extends React.Component {


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

		switch (sortByVal){
			case "author":
				console.log("handleSortByChange: AboutAuthor");
				break;
			case "music":
				console.log("handleSortByChange: music");
				break;
		}
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
		<div className="Author">
  			<div className="SearchBar-sort-options">
				<h1> Robert Knox is an author of crime novels.</h1>
  			</div>
		</div>

	)
	}
}

export default Author 

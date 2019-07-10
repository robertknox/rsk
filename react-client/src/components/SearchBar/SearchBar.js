import React from 'react';
import './SearchBar.css'
import Author from '../Author/Author.js'
import Books from '../Books/Books.js'
import News from '../News/News.js'
import Blog from '../Blog/Blog.js'
import Mailing_List from '../Mailing_List/Mailing_List.js'
import Sign_In from '../Sign_In/Sign_In.js'
import {NavLink} from 'react-router-dom';


const sortByOptions = {
  'Home': 'Home',
  'About The Author': 'Author',
  'News': 'News',
  'Books': 'Books',
  'Audio_Books': 'Audio_Books',
  'Music': 'Music',
}


export class SearchBar extends React.Component {


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
		{/*	return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>; */}
                        return <li><NavLink to={"/" +  sortByOptionValue}> {sortByOptionValue} </NavLink></li>
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


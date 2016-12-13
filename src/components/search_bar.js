import React, { Component } from 'react'; 


class SearchBar extends Component { // define a new class called SearchBar and give it access to all of the functionality that React.Component has 

	constructor(props) {
		super(props); 
		this.state = {term: ''}; 
	} 

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}

}










export default SearchBar; 
import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component{
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="nav">
                <form className='search-container'
                onSubmit={this.onFormSubmit}>
                    <label htmlFor="search-bar" className="search">Search</label>
                    <input type="text" id="search-bar" className="search"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;
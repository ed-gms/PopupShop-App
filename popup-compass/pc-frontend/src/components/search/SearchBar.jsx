import React, { Component } from 'react';

const searchBarStyle = {
  padding: 30,
}

class SearchBar extends Component {

  render() {
    return (
      <form className="form-inline active-cyan-4 d-flex justify-content-center"
        style={searchBarStyle}
        ref={self => { this.formInput = self }}
        onSubmit={(e) => {
          e.preventDefault()
          if (this.formInput.search.value !== '') {
            this.props.updateSearch(this.formInput.search.value)
            this.formInput.search.value = ''
          }
        }
        }
      >
        <input
          className="form-control form-control-lg mr-3 w-75" type="text"
          placeholder="Search"
          aria-label="Search"
          name="search"
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>

    );
  }
}

export default SearchBar;
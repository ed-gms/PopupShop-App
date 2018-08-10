import React from "react";

const searchBarStyle = {
  padding: 30
};

const SearchBar = () => {
  return (
    <form
      className="form-inline active-cyan-4 d-flex justify-content-center"
      style={searchBarStyle}
      ref={self => {
        this.formInput = self;
      }}
      onSubmit={e => {
        e.preventDefault();
        if (this.formInput.search.value !== "") {
          this.props.updateSearch(this.formInput.search.value);
          this.formInput.search.value = "";
        }
      }}
    >
      <input
        className="form-control form-control-lg mr-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        name="search"
      />
      <i className="fa fa-search" aria-hidden="true" />
    </form>
  );
};

export default SearchBar;

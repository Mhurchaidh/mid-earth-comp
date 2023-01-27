function Search({ searchTerm, onSearchChange }) {

    return (
        <div className="search">
            <input
              value={searchTerm}
              className="search"
              type="text"
              placeholder="Search Characters"
              onChange={(e) => onSearchChange(e.target.value)}
            />
      </div>
    )
}

export default Search;
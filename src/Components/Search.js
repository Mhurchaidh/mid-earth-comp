function Search({ searchTerm, onSearchChange }) {

    return (
        <div className="search">
            <input
              value={searchTerm}
              type="text"
              placeholder="Search Characters"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <i>🔎</i>
      </div>
    )
}

export default Search;
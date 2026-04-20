function FilterPanel({ selectedCategory, onFilterClick }) {
    const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  
    return (
      <div className="filter-card">
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => onFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default FilterPanel;
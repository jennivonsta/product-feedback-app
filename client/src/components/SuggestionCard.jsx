function SuggestionCard({ suggestion }) {
    return (
      <article className="suggestion-card">
        <h3>{suggestion.title}</h3>
        <p>{suggestion.detail}</p>
        <span className="category-pill">{suggestion.category}</span>
      </article>
    );
  }
  
  export default SuggestionCard;
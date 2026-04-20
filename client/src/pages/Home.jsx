import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import HeaderBar from "../components/HeaderBar";
import SuggestionCard from "../components/SuggestionCard";
import EmptyState from "../components/EmptyState";

function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchSuggestions();
  }, []);

  async function fetchSuggestions() {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }

  async function handleFilterClick(category) {
    setSelectedCategory(category);

    try {
      if (category === "All") {
        const response = await fetch("/api/get-all-suggestions");
        const data = await response.json();
        setSuggestions(data);
      } else {
        const response = await fetch(
          `/api/get-suggestions-by-category/${category.toLowerCase()}`
        );
        const data = await response.json();
        setSuggestions(data);
      }
    } catch (error) {
      console.error("Error filtering suggestions:", error);
    }
  }

  return (
    <main className="page page-home">
      <section className="layout">
        <aside className="sidebar-area">
          <div className="brand-card">
            <h1>My Company</h1>
            <p>Feedback Board</p>
          </div>

          <FilterPanel
            selectedCategory={selectedCategory}
            onFilterClick={handleFilterClick}
          />
        </aside>

        <section className="content-area">
          <HeaderBar suggestionCount={suggestions.length} />

          {suggestions.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="suggestions-list">
              {suggestions.map((suggestion) => (
                <SuggestionCard
                  key={suggestion.id}
                  suggestion={suggestion}
                />
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default Home;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddFeedback() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("feature");
  const [description, setDescription] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    let hasError = false;

    if (title.trim() === "") {
      setTitleError(true);
      hasError = true;
    } else {
      setTitleError(false);
    }

    if (description.trim() === "") {
      setDescriptionError(true);
      hasError = true;
    } else {
      setDescriptionError(false);
    }

    if (hasError) {
      return;
    }

    const newSuggestion = {
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
    };

    console.log("Sending this to backend:", newSuggestion);

    try {
      const response = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSuggestion),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to add feedback");
      }

      navigate("/");
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  }

  function handleCategorySelect(newCategory) {
    setCategory(newCategory);
    setShowDropdown(false);
  }

  return (
    <main className="page page-form">
      <div className="form-page-wrapper">
        <Link to="/" className="go-back-link">
          ← Go Back
        </Link>

        <section className="feedback-form-card">
          <div className="plus-circle">+</div>

          <h1>Create New Feedback</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Feedback Title</label>
              <p className="field-help">Add a short, descriptive headline</p>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={titleError ? "field-error" : ""}
              />
              {titleError && <p className="error-text">Can&apos;t be empty</p>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <p className="field-help">Choose a category for your feedback</p>

              <div className="custom-dropdown">
                <button
                  type="button"
                  className={`dropdown-button ${showDropdown ? "active" : ""}`}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span className="capitalize">{category}</span>
                  <span>{showDropdown ? "⌃" : "⌄"}</span>
                </button>

                {showDropdown && (
                  <div className="dropdown-menu">
                    {["feature", "ui", "ux", "enhancement", "bug"].map(
                      (item) => (
                        <button
                          type="button"
                          key={item}
                          className={`dropdown-item ${
                            category === item ? "selected" : ""
                          }`}
                          onClick={() => handleCategorySelect(item)}
                        >
                          <span className="capitalize">{item}</span>
                          {category === item && <span>✓</span>}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Feedback Detail</label>
              <p className="field-help">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className={descriptionError ? "field-error" : ""}
              />
              {descriptionError && (
                <p className="error-text">Can&apos;t be empty</p>
              )}
            </div>

            <div className="form-buttons">
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default AddFeedback;
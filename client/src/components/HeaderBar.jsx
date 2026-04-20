import { Link } from "react-router-dom";

function HeaderBar({ suggestionCount }) {
  return (
    <div className="header-bar">
      <div className="header-left">
        <span className="bulb-icon">💡</span>
        <h2>{suggestionCount} Suggestions</h2>
      </div>

      <Link to="/add-feedback" className="btn btn-primary add-feedback-link">
        + Add Feedback
      </Link>
    </div>
  );
}

export default HeaderBar;
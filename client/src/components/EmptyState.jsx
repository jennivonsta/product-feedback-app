import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <section className="empty-state">
      <div className="empty-illustration">🕵️</div>
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        We love hearing about new ideas to improve our app.
      </p>
      <Link to="/add-feedback" className="btn btn-primary">
        + Add Feedback
      </Link>
    </section>
  );
}

export default EmptyState;
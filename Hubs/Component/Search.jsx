import { useLocation } from "react-router-dom";

const Search = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div className="container mt-5">
      <h3>Search Results for: <strong>{query}</strong></h3>
      <p className="text-muted">Results page UI coming soon...</p>
    </div>
  );
};

export default Search;
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |<Link to="/resources">Resources</Link> |
      <Link to="/challenges">Challenges</Link> |
      {!token ? (
        <>
          <Link to="/login">Login</Link> |<Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>
        <Link to="/users">Users</Link>
      </h1>
    </div>
  );
};

export default HomePage;

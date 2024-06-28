import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return <div>UserDetails - ID : {id}</div>;
};

export default UserDetails;

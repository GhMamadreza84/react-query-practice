import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { data } = useQuery(["users", id], fetchUserDetails);
  return <div>UserDetails - ID : {id}</div>;
};

export default UserDetails;

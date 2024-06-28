import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const fetchUserDetails = async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  };
  const { data } = useQuery(["users", id], fetchUserDetails);
  console.log(data);
  return (
    <div>
      UserDetails - ID : {id}
      
    </div>
  );
};

export default UserDetails;

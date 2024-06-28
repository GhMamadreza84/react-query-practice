import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const fetchUserDetails = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
  };
  const { data } = useQuery(["users", id], fetchUserDetails);
  console.log({data});
  return (
    <div>
      UserDetails - ID : {id}
      <div key={data?.id}>
        <h2>{data?.name}</h2>
        <h3>{data?.username}</h3>
        <h4>{data?.email}</h4>
      </div>
    </div>
  );
};

export default UserDetails;

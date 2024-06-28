import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  
  console.log({data});
  return (
    <div>
      UserDetails - ID : {id}
      {isLoading && <h2>Loading ...</h2>}
      <div key={data?.id}>
        <h2>{data?.name}</h2>
        <h3>{data?.username}</h3>
        <h4>{data?.email}</h4>
      </div>
    </div>
  );
};

export default UserDetails;

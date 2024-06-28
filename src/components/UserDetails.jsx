
import { useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/queries";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useUserDetails(id);
  console.log({ data });
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

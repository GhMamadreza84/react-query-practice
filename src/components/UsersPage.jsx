import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UsersPage = () => {
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  const { data, isLoading, isError, error } = useQuery(["users"], fetchUsers);

  // console.log(isError , error);
  if (isLoading) return <h1>Loading ...</h1>;
  if(isError) return <h1>Something Went Wrong  - {error.message}</h1>
  return (
    <div>
      {data.map((i) => (
        <h4 key={i.id}>{i.name}</h4>
      ))}
    </div>
  );
};

export default UsersPage;

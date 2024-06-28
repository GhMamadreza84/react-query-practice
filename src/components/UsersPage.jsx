import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const UsersPage = () => {
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["users"],
    fetchUsers,
    {
      // cacheTime: 3000,
      // staleTime: 5 * 1000,
      // refetchOnMount : false,
      // refetchOnWindowFocus:false,
      // refetchInterval: 10 * 1000,
      enabled: false,
      // onSuccess: () => console.log("succees"),
      // onError: () => console.log("error"),
    }
  );

  // console.log(isError , error);
  // if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Something Went Wrong - {error.message}</h1>;
  return (
    <div>
      <button onClick={refetch}>Fetch</button>
      {isLoading && isFetching && <h1>Loading ... </h1>}
      {data?.map((i) => (
        <Link key={i.id} to={`/users/${i.id}`}>
          <h4>{i.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;

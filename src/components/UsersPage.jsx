import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import {useUsersData } from "../hooks/queries";
const UsersPage = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useUsersData();

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

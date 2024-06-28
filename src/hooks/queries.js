import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserDetails = (id) => {
  const fetchUserDetails = async ({ queryKey }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
    return res.data;
  };
  return useQuery(["users", id], fetchUserDetails);
};

export { useUserDetails };

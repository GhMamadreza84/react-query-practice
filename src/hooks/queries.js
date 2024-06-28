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

const useUsersData = () => {
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };  
  return useQuery(["users"], fetchUsers, {
    // cacheTime: 3000,
    // staleTime: 5 * 1000,
    // refetchOnMount : false,
    // refetchOnWindowFocus:false,
    // refetchInterval: 10 * 1000,
    enabled: false,
    // onSuccess: () => console.log("succees"),
    // onError: () => console.log("error"),
  });
};

export { useUserDetails, useUsersData };

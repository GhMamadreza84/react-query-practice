import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  const fetchUserDetails = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
  };
  return useQuery(["users", id], fetchUserDetails);
};

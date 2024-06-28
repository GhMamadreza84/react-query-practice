import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAddPost } from "../hooks/mutation";

const Form = () => {
  const { mutate, data } = useAddPost();
  console.log(data);
  const sendHandler = () => {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    mutate(data);
  };
  return (
    <div>
      Form
      <br />
      <button onClick={sendHandler}>Send</button>
    </div>
  );
};

export default Form;

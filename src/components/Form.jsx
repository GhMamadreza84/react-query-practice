import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Form = () => {
  const addPost = () => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };
  const { mutate } = useMutation(addPost);
  console.log(mutate);
  const sendHandler = () => {
    mutate();
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

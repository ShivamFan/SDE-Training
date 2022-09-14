import axios from "axios";
const ADDURL = `http://localhost:8080/task`;

const addTask = async (title, description) => {
  try {
    //  const response =await fetch(`${GETURL}`)
    let is_complete = false;
    const response = await axios.post(`${ADDURL}`, { title, description, is_complete });
    //  console.log(response)
    // const data=await response.json();
    if (response.is_complete >= 400) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default addTask
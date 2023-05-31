// use local storage to manage Job data
import { toast } from "react-toastify";
const addToDb = (id, title) => {
  let jobCart = JSON.parse(localStorage.getItem("job-cart"));
  if (jobCart) {
    if (jobCart.find((index) => index.id == id)) {
      toast("This job is already added in data base !!!");
      return;
    }
    let newJobCart = [...jobCart, { title: title, id }];
    localStorage.setItem("job-cart", JSON.stringify(newJobCart));
  } else {
    const addJob = [{ title: title, id }];
    localStorage.setItem("job-cart", JSON.stringify(addJob));
  }
};


export { addToDb };

import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const request = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUser(request.data);
    }
    fetchingData();
  }, []);
  return (
    <div className="user-list">
      {listOfUser.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
};
export default UserList;

import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

 export default UserProfile;
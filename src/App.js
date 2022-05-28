import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const profile = [];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let i;
  let imageLink = "https://robohash.org/";
  for (i = 0; i < items.length; i++) {
    profile.push (
      <div className="user" key={items[i].id}>
        <div className="img-div">
          {""}
          <img src={`${imageLink}${i}`} alt="profile-pic" />{""}
          </div>
          <div className="details-div">
            {""}
          <h4 className="user-username">Username: {items[i].username}</h4>
          <h4 className="user-name">Name: {items[i].name}</h4>
          <h4 className="user-email">E-mail: {items[i].email}</h4>
          <h4 className="user-address">
            Address : {items[i].address.street}, {items[i].address.city}
            <h4 className="user-phone">Phone: {items[i].phone}</h4>
            <h4 className="user-company-name">
              {""}
              Company-Name: {items[i].company.name}{""}
            </h4>
            <h4 className="user-web">Website: {items[i].website} </h4>
          </h4>{""}
        </div>
      </div>
    );
  }

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <div id="profile-body">{profile}</div>;
  }
}
export default App;

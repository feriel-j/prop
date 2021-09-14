import "./App.css";
import { Profile } from "./component/Profile";
import PropTypes from "prop-types";

function App() {
  const person = {
    Fullname: "feriel",
    Bio: "full stack js",
    Profession: "engineer",
    imag: "https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=1200x900",
  };
  const alertt = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Profile person={person} alertt={alertt}>
            <h1>this is child props</h1>
          </Profile>
        </div>
      </header>
    </div>
  );
}

export default App;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import './App.css';






function App() {
  return (
    <div >
    <h1> <FontAwesomeIcon className="fa-icon" icon={faHome} /> Favourite plans in life</h1>
      <ul>
      <li> <FontAwesomeIcon className="fa-icon" icon={faSuitcase} /> Learn Software development</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faEnvelope} /> Own a business</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faPhone} />Fight Inequality in the soceity</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faAsterisk} /> Provide access to sustainable skills for the upcoming generation</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faGlobe} /> Become a link between man and God</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faSuitcase} /> Get a life of my own</li>
       
       
      </ul>
<hr style={{margin:"20px"}}/>
 <ul>
      <li> <FontAwesomeIcon className="fa-icon" icon={faSuitcase} /> Learn Software development</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faEnvelope} /> Own a business</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faPhone} />Fight Inequality in the soceity</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faAsterisk} /> Provide access to sustainable skills for the upcoming generation</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faGlobe} /> Become a link between man and God</li>
      <li> <FontAwesomeIcon className="fa-icon" icon={faSuitcase} /> Get a life of my own</li>
       
       
      </ul>
    </div>
  );
}

export default App;

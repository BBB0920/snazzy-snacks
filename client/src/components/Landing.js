import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';

import Button from "./Button";
import About from './About';

import "./styles/Landing.scss";
import candy from "../images/candy.png";
import snack from "../images/snack.png";
import chips from "../images/crisps.png";
import snack2 from "../images/snack2.png";
import down_arrow from "../images/down_arrow.png"

export default function Landing(props) {

  // Function to retrieve cookie
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data.cookie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

  return (
    <>
      <section className="landing-background layout">
        <div className="landing-layout">
          <div className='landing-text'>
            <h1 className="coiny">SNAZZY SNACKS</h1>
            <h3>Upgrade your snacking game with pizazz-packed treats.<br />Every month at your doorstep!</h3>
            <h5>*starting at 20$/mo</h5>
            <div>
              {props.cookieValue ? 
                <Link to="/account">
                  <Button>GET SNACKING!</Button>
                </Link>
              :
                <Link to="/login">
                  <Button>GET SNACKING!</Button>
                </Link>
              }
            </div>
          </div>
          <div className="img-layout">
            <img className="landing-chip" src={chips} alt="Chips" />
            <img className="landing-candy" src={candy} alt="Candy" />
            <div className='arrow-container'>
              <HashLink smooth duration={1000} delay={200} to="/#about">
                <img className="down-arrow" src={down_arrow} alt="Down arrow" />
              </HashLink>
            </div>
            <img className="landing-snack" src={snack} alt="Snack" />
            <img className="landing-bar" src={snack2} alt="Snack" />
          </div>
        </div>
      </section>
      <section id='about'>
        <About cookieValue={props.cookieValue} setCookieValue={props.setCookieValue}/>
      </section>
    </>
  );
}

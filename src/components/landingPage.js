import React,{useState} from "react";
import { AiOutlineCalendar } from "react-icons/ai";

function LandingPage() {





        const handleEmailClick = () => {
            const email = 'hub@msu.mcmaster.ca';
            const mailtoLink = `mailto:${email}`;
        
            window.location.href = mailtoLink;
        };

    

  return (
    <div className="container-flush ">
      {/* NAV BEGINNING  */}
      <div className="col-xl-12 mb-4 ">
        <div className="row mt-2 nav-container pb-2  ps-3 pe-3 ">
          <div className="col-lg-2 col-6 d-flex align-items-center mb-2 justify-content-center">
            <img
              className="MSU-logo"
              src={require("../img/MSU.png")}
              alt="MSU Logo"
            />
          </div>
          <div className="col-sm-6 col-6  mt-3 justify-content-center d-flex align-items-center d-lg-none  d-md-flex">
            <img
              className="HUB-logo"
              src={require("../img/HUB-Logo-Colour.png")}
              alt="MSU Logo"
            />
          </div>  
          <div className="col-12  col-lg-8 d-flex align-items-center text-center justify-content-center">
            <h1>Hub Collaboration Suites Reservations</h1>
          </div>
          <div className=" col-lg-2 col-12 mt-3 justify-content-center d-flex align-items-center d-md-none d-lg-flex d-none ">
            <img
              className="HUB-logo"
              src={require("../img/HUB-Logo-Colour.png")}
              alt="MSU Logo"
            />
          </div>
        </div>
      </div>
      {/* NAV ENDING  */}
      {/* RESERVE BUTTON BEGINNING  */}
      <div className="row ">
        <div className="col-10 mx-auto mt-2 d-flex align-items-center  flex-column ">
          <div className="row d-flex justify-content-center ">
            <div className="col-8 text-center  ">
              <h3>
                View the availability of the MSU’s Collaboration Suites or
                easily schedule a space today. Reservation requests will be
                automatically approved if the Collaboration Suite is available
                and you will be sent an email confirmation.
              </h3>
            </div>
          </div>
          <div className="row mt-5 mb-2">
            <div className="col-12 ">
              <a className="reserveButton" href="https://booked.msuit.ca/Web/?">
                {" "}
                <i>
                  <AiOutlineCalendar />
                </i>{" "}
                Reserve a Collaboration Suite
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <a className="underlineButton" href="https://accessible.msuit.ca/">Accessible Reservation Schedule</a>
            </div>
          </div>
        </div>
      </div>
      {/* RESERVE BUTTON ENDING  */}
      {/* COLLABORATION SUITE BOOKING BEGINNING  */}
      <div className="container mt-4 ">
        <h2 className="m-3">Collaboration Suite Booking Regulations:</h2>
        <div className="row  ">
          <div className="col-md-6 border-right">
            <h4>Capacity:</h4>
            <ul className="colabContent">
              <li className="">
                A <strong>minimum of two (2) students </strong> are required to
                book a Collaboration Suite. The Collaboration Suites are{" "}
                <strong>not intended to be used on an individual basis.</strong>
              </li>
              <li>
              Each Collaboration Suite has a unique layout and comfortably seats a specific number of people. Recommended capacities are as follows: 
                <ul>
                  <li>C302A - 4 People </li>
                  <li>C302B - 6 People</li>
                  <li>C302C - 4 People</li>
                  <li>C302D - 2 People</li>
                  <li>C302E - 4 People</li>
                  <li>C302F - 6 People</li>
                  <li>C302G - 4 People</li>
                </ul>
              </li>
            </ul>
            <div className="row mt-2 ">
              <div className="col-12 ">
                <h4>Food/Drinks: </h4>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <ul className="colabContent">
                    <li>
                      <strong> Food cannot be eaten</strong> in the
                      Collaboration Suites.
                    </li>
                    <li>
                      Drinks must have a <strong>closable lid </strong> to be
                      consumed in the Collaboration Suites.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Booking: </h4>
            <ul className="colabContent">
              <li>
                If a Collaboration Suite is not reserved, then it can used on a
                <strong> drop-in basis.</strong>
              </li>
              <li>
                Groups that are <strong> over 15 minutes late</strong> to occupy
                the Collaboration Suite <strong>will lose their booking</strong>{" "}
                and the space becomes available for others to use.
              </li>
              <li>
                {" "}
                Reservations are limited to{" "}
                <strong>three hours per day per group</strong>. 
              </li>
              <li>
                Attempts to
                monopolize the Collaboration Suites <strong> will not </strong> be tolerated.
              </li>
              <li>
                Reservations can be made a{" "}
                <strong> maximum of 1 week in advance</strong>, and a
                <strong> minimum of 24 hours </strong> prior to the scheduled
                start time.
              </li>
              <li>
                A <strong>valid MacID is required</strong> to reserve a
                Collaboration Suite.
                 <strong> Reservations must be made online</strong>.
              </li>
              <li>
                {" "}
                Reservations that are{" "}
                <strong>no longer required should be cancelled.</strong>
              </li>
              <li>
                If you find a Collaboration Suite that is in{" "}
                <strong> poor condition </strong> upon arrival,
                <strong> please report </strong> this to an attendant at the
                Welcome Desk.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* COLLABORATION SUITE BOOKING ENDING  */}
      {/* FOOTER BEGINNING */}
      <div className="row footer pb-1 ">
        <div className="col-4 col-sm-3 col-md-2 col-lg-2 pt-2 d-flex justify-content-center">
          <img
            className="MSU-logo-footer"
            src={require("../img/MSU.png")}
            alt="MSU Logo"
          />
        </div>
        <div className="col-8 col-sm-9 col-md-10 col-lg-10 pt-3  ">
            
          <div className="row">
            <h2 className="footer-msu">McMaster Students Union</h2>
          </div>
          <div className="row">
            <h2 className="footer-info">
              If you have any questions or problems regarding the Collaboration
              Suites reservation system,{" "}
              <a onClick={handleEmailClick} className="please-email-us">please email us here</a>
               , or at hub@msu.mcmaster.ca.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

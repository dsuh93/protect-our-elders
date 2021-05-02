import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  // admin page should include access to reservations made by elders and availability set by volunteers
  // when clicking on a volunteers, should be able to see calendar highlighted with availability
  // when clicking on an elder, should be able to see calendar highlighted with requested date/time
  //include a sort option by date/time
  // elder/volunteer cards should have all relative details on them, or at least name and contact info
  render() {

    return (
      <>
        <header className="admin header">
          <h1 >Admin Dashboard</h1>
          <h6>Admins can use this page to access data on volunteers and community members who made requests.</h6>
        </header>
        <br/>
        <div className="admin details">
          <details className="admin volunteer-details">
            <summary>Volunteer Links</summary>
            <p>This section is dedicated to showing availability for volunteers.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/16OVaMO13jzIIRy4ujCNsM-6xZUj8CNv9jCJWC72J9fo/edit?usp=sharing">Volunteer Google Form Access</a>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1TZRyWaXMZMJ-ebZsr6niFVJoNfK-h9QgTobCbPV_Bbc/edit?usp=sharing">Volunteer Google Sheets Access</a>
          </details>
          <details className="admin request-details">
            <summary>Request Links</summary>
            <p>This section is dedicated to showing community member's requests for chaperones.</p>

            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1b-R4tvuUAVNaL5uLsq6UNjl_nuynJ_z5xVSYepHiv9E/edit?usp=sharing">Request Google Form Access</a>
            
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1TZRyWaXMZMJ-ebZsr6niFVJoNfK-h9QgTobCbPV_Bbc/edit?usp=sharing">Request Google Sheets Access</a>
          </details>
        </div>
      {/* have page split with top half split left and right calendars, bottom section should be platform to contact both elder and volunteer matched with each other */}
      </>
    )
  }
}

export default Admin;
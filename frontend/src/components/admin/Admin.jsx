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
        <h1>Admin Page</h1>
        <h6>Admins can use this page to access data on volunteers and community members who made requests.</h6>
        <br/>
        <div>
          <details className="admin volunteer-details">
            <summary>Volunteers</summary>
            <p>This section is dedicated to showing availability for volunteers.</p>
          </details>
          <details className="admin request-details">
            <summary>Requests</summary>
            <p>This section is dedicated to showing community member's requests for chaperones.</p>
          </details>
        </div>
      {/* have page split with top half split left and right calendars, bottom section should be platform to contact both elder and volunteer matched with each other */}
      </>
    )
  }
}

export default Admin;
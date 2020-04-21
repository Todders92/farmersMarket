import React from "react";

function NewDateForm(props) {
  return (
    <React.Fragment>
      <div class="demo-card-wide mdl-card mdl-shadow--4dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Welcome to Avery's Organics!</h2>
        </div>
        <div class="mdl-card__supporting-text">
          Select what day and what month it is to see where we are and what we are selling today.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <form className="mdl-textfield mdl-js-textfield getmdl-select">
            <select className="mdl-textfield__input" id="Weekday" name="Weekday" onChange={props.weekdayChange}>
              <option value="" disabled selected>Select day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <br />
            <select className="mdl-textfield__input" id="Month" name="Month" onChange={props.monthChange}>
              <option value="" disabled selected>Select month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewDateForm;
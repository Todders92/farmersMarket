import React from "react";

function NewDateForm(props) {
  return (
    <React.Fragment>
      <form>
        <label for="Weekday">Day of the Week:</label>
        <select id="Weekday" name="Weekday" onChange={props.weekdayChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <label for="Month">Current Month:</label>
        <select id="Month" name="Month" onChange={props.monthChange}>
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
    </React.Fragment>
  )
}

export default NewDateForm;
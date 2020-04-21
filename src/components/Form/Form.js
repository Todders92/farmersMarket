import React from "react";

function NewDateForm(props) {
  return (
    <React.Fragment>
      <form>
        <input name="Weekday" id="Weekday" type="text" />
        <input name="Month" id="Month" type="text" />
        <button type="submit">Search Market!</button>
      </form>
    </React.Fragment>
  )
}

export default NewDateForm;
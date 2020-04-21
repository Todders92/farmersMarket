import React from 'react';
import availableProduce from './SeasonalProduce';
import marketSchedule from './MarketSchedule';

function Results(props) {
  return (
    <React.Fragment>
      {/* <LocationResults weekday={props.weekday} /> */}
      {availableProduce.map((productList) => {
        if(productList.month === props.month) {
          productList.selection.forEach(product => {
            return <p>{product}</p>
          });
        }
      })}
      {/* <Products month={props.month}/> */}
    </React.Fragment>
  )
}

export default Results;


// function TicketList(){
//   return (
//     <React.Fragment>
//       <hr/>
//       {masterTicketList.map((ticket, index) =>
//         <Ticket names={ticket.names}
//           location={ticket.location}
//           issue={ticket.issue}
//           key={index}/>
//       )}
//     </React.Fragment>
//   );
// }
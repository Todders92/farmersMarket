import farmersMarketReducer from '../../reducers/farmers-market-reducer';

describe('farmersMarketReducer', () => {

    let action;
    const marketSchedule = {
    market: 'Test Market',
    hours: 'Test Hours',
    booth: 'Test Booth',
    id: 1
  };

  const currentState = {
    1: {market: "Test Market",
    hours: "Test Hours",
    booth: "Test Booth",
    id: 1},
    2: {market: "Test Market 2",
    hours: "Test Hours 2",
    booth: "Test Booth 2", 
    id: 2}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(farmersMarketReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new marketSchedule data', () => {
    const {market, hours, booth, id} = marketSchedule;
    action = {
      type: 'ADD_MARKET',
      market: market,
      hours: hours,
      booth: booth,
      id: id
    };
    expect(farmersMarketReducer({}, action)).toEqual({
      [id] : {
        market: market,
        hours: hours,
        booth: booth,
        id: id
      }
    });
  });

  test ('Should successfully delete a market', () => {
    action = {
      type: 'DELETE_MARKET',
      id: 1
    };
    expect(farmersMarketReducer(currentState, action)).toEqual({
      2: {market: "Test Market 2",
          hours: "Test Hours 2",
          booth: "Test Booth 2",
          id: 2 }
    });
  });

});
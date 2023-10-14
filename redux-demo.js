const redux = require("redux");

const counterReducer = (state = { counter: 6 }, action) => {
  // state = { counter: 0 } default value for state
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  if (action.type === "decrease") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
store.dispatch({ type: "decrease" });

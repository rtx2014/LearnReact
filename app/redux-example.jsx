var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else  if (state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View Your Location</a>`;
  };
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Vladimir'));

// unsubscribe();

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addHobby('Fucking'));
store.dispatch(actions.addMovie('Interstellar', 'Si-Fi'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Margarita'));
store.dispatch(actions.removeMovie(1));

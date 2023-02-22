'use strict';
module.exports = function (app) {

  // tournaments
  let tournamentsCtrl = require('./controllers/tournament');
  app.route('/tournaments')
    .get(tournamentsCtrl.get)
    .post(tournamentsCtrl.store);

  app.route('/tournaments/:productId')
    .get(tournamentsCtrl.detail)
    .put(tournamentsCtrl.update)
    .delete(tournamentsCtrl.delete);

  // rounds
  let roundsCtrl = require('./controllers/round');
  app.route('/rounds')
    .get(roundsCtrl.get)
    .post(roundsCtrl.store);

  app.route('/rounds/:productId')
    .get(roundsCtrl.detail)
    .put(roundsCtrl.update)
    .delete(roundsCtrl.delete);

    // matches
    let matchesCtrl = require('./controllers/match');
    app.route('/matches')
      .get(matchesCtrl.get)
      .post(matchesCtrl.store);
  
    app.route('/matches/:productId')
      .get(matchesCtrl.detail)
      .put(matchesCtrl.update)
      .delete(matchesCtrl.delete);

    // clubs
    let clubsCtrl = require('./controllers/club');
    app.route('/clubs')
      .get(clubsCtrl.get)
      .post(clubsCtrl.store);
  
    app.route('/clubs/:productId')
      .get(clubsCtrl.detail)
      .put(clubsCtrl.update)
      .delete(clubsCtrl.delete);

    // stadiums
    let stadiumsCtrl = require('./controllers/stadium');
    app.route('/stadiums')
      .get(stadiumsCtrl.get)
      .post(stadiumsCtrl.store);
  
    app.route('/stadiums/:productId')
      .get(stadiumsCtrl.detail)
      .put(stadiumsCtrl.update)
      .delete(stadiumsCtrl.delete);

    // standtypes
    let standtypesCtrl = require('./controllers/standtype');
    app.route('/standtypes')
      .get(standtypesCtrl.get)
      .post(standtypesCtrl.store);
  
    app.route('/standtypes/:productId')
      .get(standtypesCtrl.detail)
      .put(standtypesCtrl.update)
      .delete(standtypesCtrl.delete);

    // stands
    let standsCtrl = require('./controllers/stand');
    app.route('/stands')
      .get(standsCtrl.get)
      .post(standsCtrl.store);
  
    app.route('/stands/:productId')
      .get(standsCtrl.detail)
      .put(standsCtrl.update)
      .delete(standsCtrl.delete);

    // tickettypes
    let tickettypesCtrl = require('./controllers/tickettype');
    app.route('/tickettypes')
      .get(tickettypesCtrl.get)
      .post(tickettypesCtrl.store);
  
    app.route('/tickettypes/:productId')
      .get(tickettypesCtrl.detail)
      .put(tickettypesCtrl.update)
      .delete(tickettypesCtrl.delete);

    // ticket
    let ticketsCtrl = require('./controllers/ticket');
    app.route('/tickets')
      .get(ticketsCtrl.get)
      .post(ticketsCtrl.store);
  
    app.route('/tickets/:productId')
      .get(ticketsCtrl.detail)
      .put(ticketsCtrl.update)
      .delete(ticketsCtrl.delete);

};

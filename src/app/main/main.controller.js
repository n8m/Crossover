(function() {
  'use strict';

  angular
    .module('crossover')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    this.data = [{
      type: "firewall",
      owner: "Genry Ford",
      title: "023910239",
      timeStarted: new Date(),
      state: 'Accepted',
      metrics: 1,
      build: 0,
      unitTest: undefined,
      funcTest: null
    },{
      type: "build",
      owner: "Bill Gates",
      title: "Tenrox_R1_vd23",
      timeStarted: new Date(1,2,3,1,2,3),
      state: 'Complete',
      metrics: 0,
      build: 1,
      unitTest: 0,
      funcTest: null
    },{
      type: "firewall",
      owner: "Genry III",
      title: "31231231",
      timeStarted: new Date(),
      state: 'Running',
      metrics: 0,
      build: 0,
      unitTest: 1,
      funcTest: null
    },{
      type: "firewall",
      owner: "Genry II",
      title: "435465432",
      timeStarted: new Date(),
      state: 'Rejected',
      metrics: 1,
      build: 0,
      unitTest: null,
      funcTest: null
    },{
      type: "build",
      owner: "Bill Gates",
      title: "Tenrox_R1_vd23",
      timeStarted: new Date(1,2,3,1,2,3),
      state: 'Pending',
      metrics: undefined,
      build: undefined,
      unitTest: undefined,
      funcTest: undefined
    },{
      type: "build",
      owner: "Bill Gates",
      title: "Tenrox_R1_vd23",
      timeStarted: new Date(1,2,3,1,2,3),
      state: 'Failed',
      metrics: 0,
      build: 1,
      unitTest: {
        passed: 31,
        failed: 12,
        coverage: 31
      },
      funcTest: null
    },{
      type: "build",
      owner: "Bill Gates",
      title: "Tenrox_R1_vd23",
      timeStarted: new Date(1,2,3,1,2,3),
      state: 'Complete',
      metrics: 0,
      build: 1,
      unitTest: {
        passed: 12,
        failed: 54,
        coverage: 95
      },
      funcTest: null
    }]

  }
})();

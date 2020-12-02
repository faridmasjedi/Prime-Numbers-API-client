import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import History from './components/History';
import Documentation from './components/Documentation';
import PrimeCheck from './components/primeCheck';
import Divisions from './components/Divisions';
import PrimesToANumber from './components/PrimesToANumber';
import Primes from './components/Primes';
import PrimesInRange from './components/PrimesInRange';
import PrimesSophieCheck from './components/PrimesSophieCheck';
import PrimesMersenneCheck from './components/PrimesMersenneCheck';
import PrimesTwinCheck from './components/PrimesTwinCheck';
import PrimesIsolatedCheck from './components/PrimesIsolatedCheck';
import PrimePattern from './components/PrimePattern';


import SimpleCalculator from './components/SimpleCalculator';
import AdvancedCalculator from './components/AdvancedCalculator';
import Graph from './components/Graph';
import AdvancedMath from './components/AdvancedMath';
import Trigonometry from './components/Trigonometry';

// import App from './components/App';
const Routes= (
  <Router>

    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/history" component={History} />
      <Route exact path="/documentation" component={Documentation} />
      <Route exact path="/primes" component={Primes} />
      <Route exact path="/primeCheck" component={PrimeCheck} />
      <Route exact path="/factors" component={Divisions} />
      <Route exact path="/primes_to_a_number" component={PrimesToANumber} />
      <Route exact path="/primes_in_range" component={PrimesInRange} />
      <Route exact path="/primes_is_sophie" component={PrimesSophieCheck} />
      <Route exact path="/primes_is_mersenne" component={PrimesMersenneCheck} />
      <Route exact path="/primes_has_twin" component={PrimesTwinCheck} />
      <Route exact path="/primes_is_isolated" component={PrimesIsolatedCheck} />
      <Route exact path="/prime_pattern" component={PrimePattern} />

      <Route exact path="/simpleCalc" component={SimpleCalculator} />
      <Route exact path="/advancedCalc" component={AdvancedCalculator} />
      <Route exact path="/graph" component={Graph} />
      <Route exact path="/advancedMath" component={AdvancedMath} />
      <Route exact path="/trigonometry" component={Trigonometry} />

    </div>

  </Router>
);


ReactDOM.render(Routes , document.getElementById('app'));

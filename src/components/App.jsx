import React from 'react';
import Home from './pages/Home';
import Employment from './pages/Employment';
import Projects from './pages/Projects';
import Profiles from './pages/Profiles';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" components={Home} />
        <Route path="/employment" components={Employment} />
        <Route path="/projects" components={Projects} />
        <Route path="/profiles" components={Profiles} />
        <Route path="/error" component={PageNotFound} />>
      </Switch>
    </div>
  );
}

export default App;

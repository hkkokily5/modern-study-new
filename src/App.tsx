import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DividePage from './pages/DividePage';
import StudyZonePage from './pages/StudyZonePage';
import PrivacyRoomPage from './pages/PrivacyRoomPage';
import CafeZonePage from './pages/CafeZonePage';
import StudyRoomPage from './pages/StudyRoomPage';
import EtcPage from './pages/EtcPage';
import EventPage from './pages/EventPage';
import PlusOneEvent from './pages/PlusOneEvent';

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/divide" component={DividePage} />

      <Route path="/studyzone" component={StudyZonePage} />
      <Route path="/privacyroom" component={PrivacyRoomPage} />
      <Route path="/cafezone" component={CafeZonePage} />
      <Route path="/studyroom" component={StudyRoomPage} />
      <Route path="/etcroom" component={EtcPage} />

      <Route exact path="/event" component={EventPage} />
      <Route path="/1plus1" component={PlusOneEvent} />
    </>
  );
};

export default App;

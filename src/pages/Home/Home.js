import React from 'react';
import WhiteboardContainer from '../../common/components/WhiteboardContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Home = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
    </header>
    <WhiteboardContainer />
  </div>
);

export default Home;

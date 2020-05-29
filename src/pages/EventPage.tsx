import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '../components/PageTemplate';
import Event from '../components/Event';

const EventPage = () => {
  return (
    <>
      <Helmet>
        <title>이벤트 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark="7"
          data-background="/assets/custom/event/event.jpg"
          style={{ backgroundImage: 'url(/assets/custom/event/event.jpg)' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>이벤트 & 커뮤니티</h1>
              </div>
            </div>
          </div>
        </section>

        <Event
          title="모던스터디 특가 이벤트!"
          divide="이벤트"
          date="2020. 4. 1."
          body="알고있나 hoxy~?"
          image="/assets/custom/event/event1prev.png"
          link="1plus1"
        />
      </PageTemplate>
    </>
  );
};

export default EventPage;

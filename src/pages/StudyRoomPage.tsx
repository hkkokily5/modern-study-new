import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyRoomPage = () => {
  return (
    <>
      <Helmet>
        <title>스터디 룸 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <Interior
          title="스터디 룸"
          image="/assets/custom/rooms/studyroom.jpg"
          category=""
          usage="칠판 겸비"
          allowance="7~8명"
        />
      </PageTemplate>
    </>
  );
};

export default StudyRoomPage;

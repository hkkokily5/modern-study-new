import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyRoomPage = () => {
  return (
    <PageTemplate>
      <Interior
        title="스터디 룸"
        image="/assets/custom/rooms/studyroom.jpg"
        category=""
        usage="칠판 겸비"
        allowance="7~8명"
      />
    </PageTemplate>
  );
};

export default StudyRoomPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import Interior from '../components/Interior';
import PageTemplate from '../components/PageTemplate';

const PrivacyRoomPage = () => {
  return (
    <>
      <Helmet>
        <title>1인 집중실 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <Interior
          title="1인 집중실(포커스존)"
          image="/assets/custom/rooms/privacyroom.jpg"
          category="노트북 X(인강 허용)"
          usage="사물함 포함"
          allowance="13명"
        />
      </PageTemplate>
    </>
  );
};

export default PrivacyRoomPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyZonePage = () => {
  return (
    <>
      <Helmet>
        <title>스터디 존 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <Interior
          title="스터디 존"
          image="/assets/custom/rooms/studyzone.jpg"
          category="타이핑 금지"
          usage="무음 키보드 및 마우스 사용"
          allowance="71명"
        />
      </PageTemplate>
    </>
  );
};

export default StudyZonePage;

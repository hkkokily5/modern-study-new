import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyZonePage = () => {
  return (
    <>
      <Helmet>
        <title>기 타 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <Interior
          title=""
          image="/assets/custom/rooms/etc.jpg"
          category=""
          usage=""
          allowance=""
        />
      </PageTemplate>
    </>
  );
};

export default StudyZonePage;

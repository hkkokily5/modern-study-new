import React from 'react';
import { Helmet } from 'react-helmet';
import Interior from '../components/Interior';
import PageTemplate from '../components/PageTemplate';

const CafeZonePage = () => {
  return (
    <>
      <Helmet>
        <title>카페 존 - 모던스터디카페</title>
      </Helmet>
      <PageTemplate>
        <Interior
          title="카페 존"
          image="/assets/custom/rooms/cafezone.jpg"
          category="떡볶이, 라면 등 국물있는 음식 금지, 냄새나는 음식섭취 금지"
          usage="컴퓨터, 복합기 설치"
          allowance="명"
        />
      </PageTemplate>
    </>
  );
};

export default CafeZonePage;

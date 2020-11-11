import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueDetailHeader from '../components/issue/detail/IssueDetailHeader';
import { getIssue } from '../lib/axios/issue';
import Spinner from '../components/common/Spinner';

const IssueDetailPageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const IssueContext = React.createContext();

const IssueDetailPage = ({ match }) => {
  const issueId = match.params.id;
  const [issue, setIssue] = useState(null);

  useEffect(async () => {
    setIssue(await getIssue(issueId));
  }, []);

  if (!issue) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <IssueContext.Provider value={{ issue, setIssue }}>
        <IssueDetailPageWrapper>
          <IssueDetailHeader />
        </IssueDetailPageWrapper>
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
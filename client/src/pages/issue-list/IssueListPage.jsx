import React, { useReducer } from 'react';
import IssuesContext from '../../context/issues-context';
import IssueContainer from '../../components/issue/IssueContainer';
import IssueHeader from '../../components/issue/IssueHeader';
import reducer from './reducer';

const dummyIssues = [
  {
    id: '1',
    title: '리액트 환경설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 2, title: 'refactor', color: '#fcc7f5' },
    ],
  },
  {
    id: '2',
    title: 'express 환경설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 3, title: 'Must', color: '#028e87' },
    ],
  },
  {
    id: '3',
    title: 'webpack, babel 설정',
    labels: [
      { id: 1, title: 'bug', color: '#f9d0c4' },
      { id: 2, title: 'refactor', color: '#fcc7f5' },
    ],
  },
];

const initialState = {
  checkedIssues: [],
  issues: dummyIssues,
};

const IssueListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { issues: dummyIssues, dispatch };

  return (
    <IssuesContext.Provider value={value}>
      <IssueHeader/>
      <IssueContainer />
    </IssuesContext.Provider>
  );
};

export default IssueListPage;

import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';

function App() {
  const {activityStore} = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])  
  
  

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '5em' }}>
        <ActivityDashboard/>
      </Container>

    </>
  );
}

export default App;

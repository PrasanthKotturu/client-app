import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import LoadingComponent from '../../../app/layout/LoadingComponent';


export default function ActivityDetails() {
    const {activityStore}=useStore();
    const {selectedActivity:activity}=activityStore;
    if(!activity) return <LoadingComponent/>;
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group width='2'>
                    <Button onClick={()=>activityStore.openForm(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={activityStore.cancelSelectedActivity} basic color='grey' content='Calcle' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
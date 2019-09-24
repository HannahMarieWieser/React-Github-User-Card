import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'



function FollowersCard (props) {
   

    console.log("props", props)
    return <Card>
        <Image src= {props.info.avatar_url} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.info.login}</Card.Header>
        <Card.Meta>
            <span className='date'>Followers: {props.info.followers_url}</span>
        </Card.Meta>
        <Card.Meta>
            <span className='date'>Following: {props.info.following_url}</span>
        </Card.Meta>
        <Card.Meta>
            <span className='date'>Public Repos: {props.info.repos_url}</span>
        </Card.Meta>
        </Card.Content>
    </Card>
}



export default FollowersCard;
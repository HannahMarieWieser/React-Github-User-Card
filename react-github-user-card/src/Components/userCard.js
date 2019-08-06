import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'



const userCard = props => {
  <Card>
    <Image src= {props.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.login}</Card.Header>
      <Card.Meta>
        <span className='date'>Followers: {props.followers}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Following: {props.following}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Public Repos: {props.public_repos}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
}



export default userCard;
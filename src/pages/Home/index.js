import React from 'react'
import {FlatList} from 'react-native'

import {Container, ListContainer} from './styles'

import Story from '../../components/Story'
import Post from '../../components/Post'

import {posts, authors} from '../../data'

export default function Home() {
  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={post => String(post.id)}
        renderItem={({item, index}) => (
          <ListContainer>
            {index === 0 && <Story authors={authors} />}
            <Post post={item} authors={authors} />
          </ListContainer>
        )}
      />
    </Container>
  )
}

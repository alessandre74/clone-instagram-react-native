import React from 'react'
import {ScrollView} from 'react-native-gesture-handler'
import avatar from '../../assets/avatar1.jpg'
import badge from '../../assets/story-add.png'
import {StoryContainer, StoryAvatar, StoryAuthor, StoryBadge} from './styles'

export default function Story({authors}) {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <StoryContainer>
        <StoryAvatar source={avatar} height={60} width={60} borderRadius={30} />
        <StoryAuthor>Seu story</StoryAuthor>
        <StoryBadge source={badge} />
      </StoryContainer>

      {authors.map(author => (
        <StoryContainer key={author.id}>
          <StoryAvatar
            source={author.avatar}
            height={60}
            width={60}
            borderRadius={30}
          />
          <StoryAuthor>{author.name}</StoryAuthor>
        </StoryContainer>
      ))}
    </ScrollView>
  )
}

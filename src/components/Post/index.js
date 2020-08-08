import React from 'react'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import direct from '../../assets/send.png'
import save from '../../assets/save.png'
import options from '../../assets/options.png'

import {
  Container,
  PostContainer,
  PostHeader,
  Avatar,
  Header,
  Author,
  Location,
  PostImage,
  Footer,
  IconContainer,
  Icons,
  Icon,
  Likes,
  LikeAuthor,
  Comments,
} from './styles'

export default function Post({post, authors}) {
  const author = authors.find(item => item.id === post.authorId)

  return (
    <Container>
      <PostContainer>
        <PostHeader>
          <Avatar source={author.avatar} />
          <Header>
            <Author>{author.name}</Author>
            <Location>{post.location}</Location>
          </Header>
        </PostHeader>
        <Icon source={options} />
      </PostContainer>

      <PostImage ratio={post.aspectRatio} source={post.image} />

      <Footer>
        <IconContainer>
          <Icons>
            <Icon source={like} />
            <Icon source={comment} />
            <Icon source={direct} />
          </Icons>

          <Icon source={save} />
        </IconContainer>
        <Likes>
          Curtido por <LikeAuthor>Silvana</LikeAuthor> e
          <LikeAuthor> outras pessoas</LikeAuthor>
        </Likes>

        <Comments>
          <LikeAuthor>{author.name} </LikeAuthor>
          {post.description}
        </Comments>
      </Footer>
    </Container>
  )
}

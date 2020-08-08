import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 10px 0;
`
export const PostContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 4px;
`

export const Avatar = styled.Image`
  height: 34px;
  width: 34px;
  border-radius: 17px;
`
export const Header = styled.View`
  margin-left: 6px;
`
export const Author = styled.Text`
  font-size: 12px;
  font-weight: bold;
`
export const Location = styled.Text`
  font-size: 12px;
`
export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`
export const Footer = styled.View`
  margin: 10px 4px 4px;
`
export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Icons = styled.View`
  flex-direction: row;
`
export const Icon = styled.Image`
  margin-right: 8px;
`
export const Likes = styled.Text`
  font-size: 12px;
  margin: 6px 0;
`
export const LikeAuthor = styled.Text`
  font-size: 12px;
  font-weight: bold;
`
export const Comments = styled.Text`
  font-size: 12px;
`

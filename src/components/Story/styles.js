import styled from 'styled-components/native'

export const StoryContainer = styled.View`
  margin: 6px 12px;
  justify-content: space-between;
  align-items: center;
`

export const StoryAvatar = styled.Image`
  height: ${({height}) => `${height}px`};
  width: ${({width}) => `${width}px`};
  border-radius: ${({borderRadius}) => `${borderRadius}px`};
`
export const StoryAuthor = styled.Text`
  font-size: 12px;
  margin-top: 4px;
`
export const StoryBadge = styled.Image`
  position: absolute;
  top: 46px;
  right: 0px;
  height: 14px;
  width: 14px;
`

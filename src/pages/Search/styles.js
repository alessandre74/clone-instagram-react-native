import styled from 'styled-components/native'
import {Animated} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
export const Header = styled(Animated.View)`
  border: 1px solid #eee;
  padding-top: ${getStatusBarHeight() + 12}px;
`
export const HeaderContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  padding: 0 6px;
`
export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
  padding: 2px 6px;
  background-color: #eee;
  border-radius: 6px;
`
export const Input = styled.TextInput`
  flex: 1;
  padding: 4px 6px;
  background-color: #eee;
`

export const ScrollButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin: 4px 6px;
  padding: 4px 34px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

export const ScrollText = styled.Text`
  font-size: 11px;
  font-weight: bold;
`

export const Content = styled.View`
  flex: 1;
`
export const ElementContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
export const Element = styled.Image`
  margin: 0 1px 1px 0;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`

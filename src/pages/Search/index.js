import React, {useState} from 'react'
import {Animated, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import IconScan from 'react-native-vector-icons/AntDesign'
import IconSearch from 'react-native-vector-icons/EvilIcons'

import {searchs, posts} from '../../data'
import {
  Container,
  Header,
  HeaderContainer,
  InputContainer,
  Input,
  ScrollButton,
  ScrollText,
  Content,
  ElementContainer,
  Element,
} from './styles'

export default function Search() {
  const [scrollY] = useState(new Animated.Value(0))

  return (
    <Container>
      <Header
        style={[
          {
            height: scrollY.interpolate({
              inputRange: [0, 100, 110],
              outputRange: [110, 90, 90],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <HeaderContainer
          style={[
            {
              top: scrollY.interpolate({
                inputRange: [10, 25, 35],
                outputRange: [-10, -25, -35],
                extrapolate: 'clamp',
              }),
              opacity: scrollY.interpolate({
                inputRange: [10, 30, 40],
                outputRange: [1, 1, 0],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <InputContainer>
            <IconSearch name="search" size={18} color="#999" />
            <Input
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              placeholder="Pesquisar"
              returnKeyType="send"
            />
          </InputContainer>
          <IconScan name="scan1" size={18} />
        </HeaderContainer>

        <View>
          <Animated.ScrollView
            style={[
              {
                top: scrollY.interpolate({
                  inputRange: [10, 12, 35],
                  outputRange: [-10, -12, -35],
                  extrapolate: 'clamp',
                }),
              },
            ]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {searchs.map((seach, index) => {
              const {lib: Icon, icon, size} = seach
              return (
                <ScrollButton key={index}>
                  {seach?.lib && (
                    <Icon
                      name={icon}
                      size={size}
                      color="#000"
                      style={{marginRight: 6}}
                    />
                  )}
                  <ScrollText>{seach.text}</ScrollText>
                </ScrollButton>
              )
            })}
          </Animated.ScrollView>
        </View>
      </Header>

      <Content>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: scrollY},
                },
              },
            ],

            {useNativeDriver: false},
          )}>
          <ElementContainer>
            {posts.map((post, index) => {
              if (index === 0) {
                return (
                  <Element
                    key={index}
                    source={post.image}
                    height={300}
                    width={416}
                  />
                )
              } else {
                return (
                  <Element
                    key={index}
                    source={post.image}
                    height={100}
                    width={102.5}
                  />
                )
              }
            })}
          </ElementContainer>
        </ScrollView>
      </Content>
    </Container>
  )
}

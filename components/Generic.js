import React from 'react';
import styled from 'styled-components';
import {Flex} from '@chakra-ui/core';
import {NAV_HEIGHT} from './NavBar';

export const Title = styled.p({
    fontSize: 32,
    fontWeight: 800,
    paddingBottom: 2,
    paddingTop: 2
});

export const Subtitle = styled.p({
    fontSize: 21
});

export const BodyTitleText = styled.p({
    fontSize: 25,
    fontWeight: 600
});

export const BodyTitleLink = (props) =>
    <Flex
        align={'center'}
        direction={'row'}
        justify={'center'}
        id={props.id}
        style={{
            paddingTop: NAV_HEIGHT + 16,
            marginTop: -NAV_HEIGHT + 16,
            marginBottom: 16,
            width: '100%'
        }}
    >
        <BodyTitleText>
            {props.children}
        </BodyTitleText>
    </Flex>;

export const TitleSmall = styled.p({
    color: '#0366d6',
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8
});

export const Body = styled.p({
    fontSize: 18
});

export const Small = styled.p({
    fontSize: 16,
});

export const TextWrapper = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 16
});

export const Selectable = styled.a({
    cursor: 'pointer'
});

export const ListItem = (props) =>
    <li style={{margin: 4}}>
        <Body>{props.children}</Body>
    </li>;

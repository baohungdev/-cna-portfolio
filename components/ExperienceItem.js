import React from 'react';

import {Body, Small, TitleSmall} from './Generic';
import {Box} from '@chakra-ui/core';

export const ExperienceItem = (props) =>
    <Box
        borderBottom={'2px solid grey'}
        pb={6}
        pt={6}
    >
        <TitleSmall>{props.title}</TitleSmall>
        <Small style={{fontWeight: '600'}}>{props.dates}</Small>
        <Body style={{marginTop: 8}}>{props.body}</Body>
    </Box>;

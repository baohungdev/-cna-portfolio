import React from 'react';

import {LabeledIcon} from './LabeledIcon';
import {Body, Row} from './Generic';
import {Flex} from '@chakra-ui/core';

export const Skill = (props) =>
    <Flex
        direction={'row'}
        justify={'space-between'}
        mt={4}
        w={200}
    >
        <Body>{props.children}</Body>
        <LabeledIcon
            label={props.label}
        />
    </Flex>;

import React from 'react';

import {LabelToIcon} from '../public/constants/icons';
import {Image} from '@chakra-ui/core';

export const LabeledIcon = ({label}) =>
    <Image
        alt={label}
        src={LabelToIcon[label]}
        style={{
            height: 32,
            marginLeft: 4,
            marginRight: 4,
            width: 'auto'
        }}
    />;

import React from 'react';
import {useColorMode, Flex, Button, Icon} from '@chakra-ui/core';

const ColorToggle = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex>
            <Button onClick={toggleColorMode}>
                <Icon name={colorMode === 'dark' ? 'sun' : 'moon'} />
            </Button>
        </Flex>
    );
};

export default ColorToggle;

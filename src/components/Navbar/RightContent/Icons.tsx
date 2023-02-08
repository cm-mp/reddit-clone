import React from 'react';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import { Flex, Icon } from '@chakra-ui/react';
import { GrAdd } from 'react-icons/gr';
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
    IoVideocamOutline,
} from 'react-icons/io5';




const Icons: React.FC = () => {
    
    return (
            <Flex>
                    <Flex display={{ base : "none", md: "flex"}} align="center" borderRight="1px solid" borderColor="gray.200">
                        <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}}>
                            <Icon as={BsArrowUpRightCircle}/>    
                        </Flex>
                        <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}}>
                            <Icon as={IoFilterCircleOutline}/>    
                        </Flex>
                        <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}}>
                            <Icon as={IoVideocamOutline}/>    
                        </Flex>
                    </Flex>
                <>
                <Flex display={{ base:"none", md:"flex"}} mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4}>
                        <Flex>
                            </Flex><Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}} fontSize={20}>
                            <Icon as={BsChatDots}/>    
                        </Flex>
                        <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}} fontSize={20}>
                            <Icon as={IoNotificationsOutline}/>    
                        </Flex>
                        <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{ bg : "gray.200"}} fontSize={20}>
                            <Icon as={GrAdd}/>    
                        </Flex>
                </Flex>
                </>
            </Flex>
        )
}
export default Icons;
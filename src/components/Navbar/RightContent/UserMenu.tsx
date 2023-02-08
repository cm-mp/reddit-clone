import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Auth, signOut, User } from 'firebase/auth';
import React from 'react';
import { IoSparkles } from 'react-icons/io5';
import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLogin } from 'react-icons/md'
import { auth } from '@/firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { NodeNextRequest } from 'next/dist/server/base-http/node';

type UserMenuProps = {
    user?: User | null;
};


const UserMenu: React.FC<UserMenuProps> = ({user}) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    function signIn(auth: Auth): void {
        throw new Error('Function not implemented.');
    }

    return (
    <Menu>
     <MenuButton cursor="pointer" padding="0px 5px" borderRadius={4} _hover={{outline: "1px solid", outlineColor: "gray.200"}}>
        <Flex align="center">
            <Flex align="center">
                {user ? (
      
                <>
                    <Icon fontSize={24} mr={1} color="gray.200" as={FaRedditSquare}/>
                    <Flex direction="column" display={{base : "none", lg:"flex"}} fontSize="8pt" align="flex-start">
                        <Text fontWeight={700}>
                            {user?.displayName || user.email?.split("@")[0]}
                        </Text>
                        <Flex>
                            <Icon as={IoSparkles} color="brand.100" mr={1} />
                            <Text color="gray.400">1 karma</Text>
                        </Flex>
                    </Flex>
                </> 
                
           
            ): (
                <Icon fontSize={24} color="gray.400" as={VscAccount} /> 
            )}
            </Flex>
            <ChevronDownIcon />
        </Flex>
  </MenuButton>
  <MenuList>
    {user ? (
                <>
                <MenuItem _hover={{bg: "blue.500", color: "white"}}>
                <Flex align="center" >
                    <Icon fontSize={20} mr={2} as={CgProfile}/>
                    Profile
                </Flex>  
        </MenuItem>
        <MenuDivider/>
        <MenuItem _hover={{bg: "blue.500", color: "white"}} onClick={() => signOut(auth)}>
                <Flex align="center" >
                    <Icon fontSize={20} mr={2} as={MdOutlineLogin}/>
                    Log Out
                </Flex>  
        </MenuItem>
        </> 
            ) : (
                <>
                <MenuItem _hover={{bg: "blue.500", color: "white"}} onClick={() => setAuthModalState({ open: true, view: "login"})}>
                <Flex align="center" >
                    <Icon fontSize={20} mr={2} as={MdOutlineLogin}/>
                    Log In / Sign Up
                </Flex>  
        </MenuItem>
        </>
            )}
    
  </MenuList>
</Menu>
    )
}

export default UserMenu;
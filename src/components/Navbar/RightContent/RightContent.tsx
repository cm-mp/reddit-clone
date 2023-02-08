import AuthModal from '@/components/Modal/Auth/AuthModal';
import { auth } from '@/firebase/clientApp';
import { Flex, Modal, Button, Menu } from '@chakra-ui/react';
import { signOut } from '@firebase/auth';
import { User } from 'firebase/auth';
import { Props } from 'next/script';
import React from 'react';
import { AuthButtons } from './AuthButtons';
import Icons from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
   user?: User | null;
};

export const RightContent:React.FC<RightContentProps> = ({ user }) => {
    
    return (
        <>
        <AuthModal />
        <Flex justify="center" align="center">
            {user ? <Icons /> : <AuthButtons/>}
        <UserMenu user={user}/>    
        </Flex>
        </>
    );
};

export default RightContent;
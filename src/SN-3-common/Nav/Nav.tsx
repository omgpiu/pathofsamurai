import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {
    CommentOutlined,
    CustomerServiceOutlined,
    FileOutlined,
    SettingOutlined,
    SoundOutlined,
    TeamOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import {CHAT_PATH, DIALOGS_PATH, PROFILE_PATH, USERS_PATH} from '../routes/Routes';

const {SubMenu} = Menu;
type PropsType = {}
export const Nav: React.FC<PropsType> = () => {
    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<UserOutlined/>}>
                <Link to={PROFILE_PATH}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="Main/Messages" icon={<CommentOutlined/>}>
                <Link to={DIALOGS_PATH}>Messages</Link>
            </Menu.Item>
            <Menu.Item key="Main/Friends" icon={<TeamOutlined/>}>
                <Link to={USERS_PATH}>Friends</Link>
            </Menu.Item>
            <Menu.Item key="Main/People" icon={<UserAddOutlined/>}>
                <Link to={USERS_PATH}>People</Link>
            </Menu.Item>
            <Menu.Item key="Main/Chat" icon={<UserAddOutlined/>}>
                <Link to={CHAT_PATH}>Chat</Link>
            </Menu.Item>
            <SubMenu key="Music" icon={<CustomerServiceOutlined/>} title="Music">
                <Menu.Item key="Music/New">New music</Menu.Item>
                <Menu.Item key="Music/My">My music</Menu.Item>
                <Menu.Item key="Music/All">All music</Menu.Item>
            </SubMenu>
            <SubMenu key="News" icon={<SoundOutlined/>} title="News">
                <Menu.Item key="News/Friends">Friends</Menu.Item>
                <Menu.Item key="News/World">World</Menu.Item>
                <Menu.Item key="News/City">City</Menu.Item>
            </SubMenu>
            <SubMenu key="Settings" icon={<SettingOutlined/>} title="Settings">
                <Menu.Item key="Settings/General">General</Menu.Item>
                <Menu.Item key="Settings/Security">Security</Menu.Item>
                <Menu.Item key="Settings/Privacy">Privacy</Menu.Item>
            </SubMenu>
            <Menu.Item key="Files" icon={<FileOutlined/>}>
                Files
            </Menu.Item>
        </Menu>
    );

}



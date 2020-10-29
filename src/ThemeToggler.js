import { Moon, Sun } from '@styled-icons/evaicons-solid';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import { ThemeContext } from './ThemeProvider';

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(Sun)`
  color: #f28c38;
`;

const MoonIcon = styled(Moon)`
  color: #f5f3ce;
`;

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <Switch
            onChange={toggleTheme}
            checked={isDarkTheme}
            handleDiameter={20}
            checkedIcon={
                <Icon>
                    <MoonIcon size="20px" />
                </Icon>
            }
            onColor="#191970"
            uncheckedIcon={
                <Icon>
                    <SunIcon size="20px" />
                </Icon>
            }
            offColor="#87ceeb"
        />
    );
};

export default ThemeToggler;
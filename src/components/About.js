import React from 'react';
import styled from 'styled-components';

const Toggler = styled.div`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;

function About() {
    return (
        <Toggler>
            <div>
                <h1>This is a todoapp for your use and enjoyment</h1>
            </div>
        </Toggler>
    )
}

export default About;
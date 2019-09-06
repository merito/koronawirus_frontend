import React from 'react';
import styled from 'styled-components'

const ContextMenuContainer = styled.div`
  position: absolute;
  z-index: 99;
  background: #fff;
  padding: 10px;
  left: ${props => props.posX}px;
  top: ${props => props.posY}px;
`;


export class ContextMenu extends React.Component {
  render() {
    return(
      <ContextMenuContainer posX={this.props.x} posY={this.props.y}>
        <a href="#" onClick={() => this.props.addMarker(this.props.x, this.props.y)}>Dodaj miejsce</a>
      </ContextMenuContainer>
    )
  }
}

export default ContextMenu;
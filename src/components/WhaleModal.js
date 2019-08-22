import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WhaleModal = (props) => (
  <Modal trigger={<button class="fluid ui button button mini"> <i class="icon user"></i>{props.name}</button>}>
    <Modal.Header>Whale Profile</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://picsum.photos/800/800' />
      <Modal.Description>
        <Header>{props.name}</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WhaleModal

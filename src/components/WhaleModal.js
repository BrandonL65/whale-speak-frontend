import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const WhaleModal = (props) => (

  <Modal trigger={<button className="fluid ui button button mini"> <i className="icon user"></i>{props.name}</button>}>
    <Modal.Header>Whale 🌊 Profile</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={console.log(props)} />
      <Modal.Description>
      { props.editState ?
        <div>
          <Header>{props.name}</Header>
          <div className="ui form">
            <div className="field">
              <label>Bio</label>
              <textarea placeholder={props.bio} onChange={props.handleBioChange} value={props.currentBio}></textarea>
            </div>
            <div className="ui buttons">
              <button className="ui button" onClick={props.handleCancelClick}>Cancel</button>
                <div className="or"></div>
                  <button className="ui positive button" onClick={props.handleWhaleUpdate}>Save</button>
            </div>

          </div>
        </div>
        :
        <div>
          <Header>{props.name}</Header>
            <p>{props.bio}</p>
          <div>
            <button className="positive ui button" onClick={props.handleEditClick}>Edit Profile</button>
            <button className="negative ui button">Delete Profile</button>
          </div>
        </div>
      }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WhaleModal

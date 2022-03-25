
import React, { FC, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import NameApi from '../../api/Home/NameAPI.ts';

interface NameProps {
  setuName: () => void;
  NewName: string;
  Send: String;
}

const Name: FC<NameProps> = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const nameChangeHandler = (event) =>
  {
      setName(event.target.value);
  }
  const handleSubmit = (setuName) => () => {
    if (/^[A-Za-z\s]*$/.test(name))
    {
      NameApi.addName(name)
       .then((res) => {
         setName("");
         setuName(name);
        })
        .catch((err) => {
            console.log('There was an error validating your name.' + err);
        });
    }
    else {
      setError("The name must have a-z small characters only");
    }
  }
  return (
    <div>
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group controlId='formBasicName'>
          <ReactBootstrap.FormLabel>{ props.NewName}: </ReactBootstrap.FormLabel>
        <ReactBootstrap.Form.Control
          type='text'
            placeholder='Name'
            maxLength={6}
            value={name}
            onChange={nameChangeHandler}
          />
        
 <ReactBootstrap.Button
                variant='secondary'
                 onClick={handleSubmit(props.setuName)}
          >{  props.Send}</ReactBootstrap.Button>
        </ReactBootstrap.Form.Group>
          <ReactBootstrap.FormLabel >{ error}</ReactBootstrap.FormLabel>
      </ReactBootstrap.Form>
    
      </div>
    );
};

export default Name;
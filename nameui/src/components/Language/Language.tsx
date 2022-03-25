
import React, { FC } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import classes from "./Language.css";
import {
  setLanguage,
  translate,
  getLanguage
} from 'react-switch-lang';
import en from "../../Languages/en.json";
import fr from '../../Languages/fr.json';
import fi from '../../Languages/fi.json';

interface LanguagesProps {
  changeLanguage: string;
  setLang: () => void;
}

const handleSetLanguage = (key, setLang) => () => {
 setLanguage(key);
  if (key === 'en')
    setLang(en);
else if (key === 'fr')
    setLang(fr);
else if (key === 'fi')
    setLang(fi);
  console.log(getLanguage());
};

const Language: FC<LanguagesProps> = (props) => {
  console.log(props);
    return (
        <div>
            <p> {props.changeLanguage}:  
          <ReactBootstrap.DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="English"
            className={classes.languageChanger}
  >
    <ReactBootstrap.Dropdown.Item onClick={handleSetLanguage('en', props.setLang)}>English</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Divider />
        <ReactBootstrap.Dropdown.Item onClick={handleSetLanguage('fr', props.setLang)}>French</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Divider />
        <ReactBootstrap.Dropdown.Item onClick={handleSetLanguage('fi', props.setLang)}>Finnish</ReactBootstrap.Dropdown.Item>
    </ReactBootstrap.DropdownButton>
           </p>
        </div>
    );
};

export default translate(Language);
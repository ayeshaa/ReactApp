import React, { FC, useState } from 'react';
import Name from '../Name/Name.tsx';
import Language from '../Language/Language.tsx';
import Classes from './Home.css';
import NameApi from '../../api/Home/NameAPI.ts';


interface HomeProps
{
    ln: JSON;
    name: string;
}


const Home: FC<HomeProps> =  (props) => {
    const [lang, setLang] = useState({});
    const [uName, setuName] = useState();
    if (uName == undefined)
        setuName(props.name);
        
    console.log("usestatenamevalue..." + uName);
    if (lang.hello != null)
     {
        return (
        <div className={Classes.MainContent}>
                <h1>{lang.hello} <span>{ uName}</span>!</h1>
                <Name setuName={setuName} Send={lang.send} NewName={lang.newName}   />
                <Language changeLanguage={lang.language} setLang={ setLang}  /> 
        </div>
         );
    }
     else {
         return (
        <div className={Classes.MainContent}>
            <h1>{ props.ln.hello} <span>{ uName}</span>!</h1>
            <Name setuName={setuName} Send={props.ln.send} NewName={ props.ln.newName}   />
            <Language changeLanguage={props.ln.language} setLang={ setLang} />
        </div>
         );
    }
    
};

export default Home;
import './App.css';
import Home from './components/Home/Home.tsx';
import {
  setTranslations,
  setDefaultLanguage,
} from 'react-switch-lang';
import en from "./Languages/en.json";
import fr from './Languages/fr.json';
import fi from './Languages/fi.json';
import NameApi from './api/Home/NameAPI.ts';

setTranslations({ en, fr, fi });
setDefaultLanguage('en');
var User = "";
var name = "";
 NameApi.getNames()
        .then((res) => {
          console.log(res.data);
          User = res.data.names[res.data.names.length - 1];
          name = User.name;
          console.log(name);
        })
        .catch((err) => {
            console.log('error.App.' + err);
        });
function App() {
  return (
    <div>
      <Home ln={en} name={name}/>
    </div>
  );
}

export default App;

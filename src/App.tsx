import React, { useEffect } from 'react';
import Layout from 'src/Layout/Layout'
import './App.css';
import {Characters} from "src/services/HomeService";
import {CharacterType} from "src/models/character.interface";

function App() {
    /**
     * @description Get characters data
     */
    useEffect(() => {
        Characters.getCharacters()
            .then((data: CharacterType[]) => {
                console.log(data)
            })
            .catch((err: any) => {
                console.log(err)
                // TODO Future improvements - Handle error - display a toaster
                // setIsError(true);
            })
            .finally(() => {
                console.log("Handle loading data");
            })
        return () => {};
    }, []);

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;

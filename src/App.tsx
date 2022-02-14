// import { useState } from "react";
// import { Tweet } from "./components/Tweets"
import { AppRoutes } from "./routes";

 function App() {
//   //criando um estado
//   const [tweets, setTweets] = useState<string[]>([]); //através de generics, falo que o UseState vai receber um array de srtings 
//   function createTweet(){
//     //para não perder os valores anteriores e poder adicionar um novo
//     setTweets([...tweets, 'Tweet 5']);
//   }


  return (
    <> 
      <AppRoutes/>
{/*     
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
        //para mostrar os elementos em tela
      })} 

      <button onClick={createTweet}>Adicionar tweet</button>    */}
    </>
  )
}

export default App

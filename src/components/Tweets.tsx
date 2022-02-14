type TweetProps = {
  text: string;
}

export function Tweet(props: TweetProps){
  return(
    <p>{props.text}</p>
  );
}
 
//quando o html tem mais de uma linha, coloca o () por volta 
//a função tweet recebe as propriedades do componente pai e as props precisam de uma tipagem  
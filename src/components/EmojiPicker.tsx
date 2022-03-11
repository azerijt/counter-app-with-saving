import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentEmoji, queueNewEmoji] =
  useState<string>('');

  const [storedEmojis, queueStoredEmoji] =
    useState<string[]>([]);


  const handlePickFoxEmoji = () => {
    queueNewEmoji("🦊");
  };

  const handlePickUniEmoji = () => {
    queueNewEmoji("🦄");
  };

  const handlePickFrogEmoji = () => {
    queueNewEmoji("🐸");
  };
  const handlePickMonkeyEmoji = () => {
    queueNewEmoji("🐒");
  };

  const handleStoreCurrentEmoji = () => {
    queueStoredEmoji([...storedEmojis, currentEmoji]);
  };

  const listItems= storedEmojis.map((emoji,index)=>(
    <li key={index}>{emoji}</li>
  ));
  console.log(listItems)

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>Your recent emojis: 
        <ul>
          {listItems.slice(-5)}
        </ul>
      </p>
      <p>Your current emoji: {currentEmoji}</p>
      <button onClick={handlePickUniEmoji}>🦄</button>
      <button onClick={handlePickFoxEmoji}>🦊</button> 
      <button onClick={handlePickFrogEmoji}>🐸</button> 
      <button onClick={handlePickMonkeyEmoji}>🐒</button> 

      <hr />
      <button onClick={handleStoreCurrentEmoji}>Store current emoji</button>
    </>
  );
}

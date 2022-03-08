import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [EmojiFromCurrentRender, queueRerenderWithNewEmoji] =
  useState<string>();

  const [favouriteEmojiFromCurrentRender, queueRerenderWithNewFavouriteEmoji] =
    useState<string>();


  const handlePickFoxEmoji = () => {
    queueRerenderWithNewEmoji("🦊");
  };

  const handlePickUniEmoji = () => {
    queueRerenderWithNewEmoji("🦄");
  };

  const handlePickFrogEmoji = () => {
    queueRerenderWithNewEmoji("🐸");
  };
  const handlePickMonkeyEmoji = () => {
    queueRerenderWithNewEmoji("🐒");
  };

  const handleStoreCurrentEmoji = () => {
    queueRerenderWithNewFavouriteEmoji(EmojiFromCurrentRender);
  };

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>Your stored emoji: {favouriteEmojiFromCurrentRender}</p>
      <p>Your current emoji: {EmojiFromCurrentRender}</p>
      <button onClick={handlePickUniEmoji}>🦄</button>
      <button onClick={handlePickFoxEmoji}>🦊</button> 
      <button onClick={handlePickFrogEmoji}>🐸</button> 
      <button onClick={handlePickMonkeyEmoji}>🐒</button> 

      <hr />
      <button onClick={handleStoreCurrentEmoji}>Store current emoji</button>
    </>
  );
}

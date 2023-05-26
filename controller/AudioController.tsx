// play audio
export const play = async (playbackObj: any, uri: any) => {
  try {
    return await playbackObj.loadAsync(
      {
        uri,
      },
      { shouldPlay: true }
    );
  } catch (error) {
    console.log("Error finded in play audio", error);
  }
};

// pause audio
export const pause = async (playbackObj: any) => {
  try {
    return await playbackObj.setStatusAsync(
      { shouldPlay: false },
      { isPlaying: false }
    );
  } catch (error) {
    console.log("Error finded in pause audio", error);
  }
};

// resume audio
export const resume = async (playbackObj: any) => {
  try {
    return await playbackObj.playAsync();
  } catch (error) {
    console.log("Error finded in resume audio", error);
  }
};

// select another audio
export const playNext = async (playbackObj: any, uri: any) => {
  try {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();
    return await play(playbackObj, uri);
  } catch (error) {
    console.log("Error finded in select another audio", error);
  }
};

import { useCallback } from 'react';

function App() {
  const handleShare = useCallback(async () => {
    const filesArray = ['src/assets/test.mp4'];
    Object.freeze(filesArray);

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator
        .share({
          files: filesArray,
          title: 'Video sharing test',
          text: 'test',
        })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }, []);

  return (
    <>
      <button onClick={handleShare}>share</button>
      <p className='result'></p>
    </>
  );
}

export default App;

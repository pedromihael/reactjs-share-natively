import { useCallback } from 'react';

function App() {
  const handleShare = useCallback(async () => {
    const file = new File(['/src/assets/test.mp4'], 'test.mp4');
    const filesArray = [file];
    Object.freeze(filesArray);

    console.log([file], 'test.mp4');

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

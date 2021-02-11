import { useCallback } from 'react';

function App() {
  const handleShare = useCallback(async () => {
    // const metadata = { type: 'video/mp4' };
    // const files_input = document.querySelector('#files');

    const fileFetch = await fetch('./assets/test.mp4');
    const blob = fileFetch.blob();
    const file = new File([blob], 'test.mp4', { type: 'video/mp4' });
    const filesArray = [file];

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
      <p>3</p>
      {/* <input id='files' type='file' /> */}
      <button onClick={handleShare}>share</button>
      <p className='result'></p>
    </>
  );
}

export default App;

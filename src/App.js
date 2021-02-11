import { useCallback } from 'react';
import { Container } from './styles';

function App() {
  const handleShareOne = useCallback(async () => {
    const fileFetch = await fetch('/test.mp4');
    const blob = await fileFetch.blob();
    const file = new File([blob], 'test.mp4', { type: 'video/mp4' });
    const filesArray = [file];

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator
        .share({
          files: filesArray,
          title: 'Sharing natively via PWA',
          text: 'Sharing natively via PWA',
        })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }, []);

  const handleShareMany = useCallback(async () => {
    const fileFetch1 = await fetch('/test.mp4');
    const blob1 = await fileFetch1.blob();
    const file1 = new File([blob1], 'test.mp4', { type: 'video/mp4' });

    const fileFetch2 = await fetch('/test-2.mp4');
    const blob2 = await fileFetch2.blob();
    const file2 = new File([blob2], 'test-2.mp4', { type: 'video/mp4' });
    const filesArray = [file1, file2];

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator
        .share({
          files: filesArray,
          title: 'Sharing natively via PWA',
          text: 'Sharing natively via PWA',
        })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }, []);

  return (
    <Container>
      <video controls>
        <source src='/test.mp4' type='video/mp4' />
        Your browser does not support HTML video.
      </video>
      <video controls>
        <source src='/test-2.mp4' type='video/mp4' />
        Your browser does not support HTML video.
      </video>
      <button onClick={handleShareOne}>SHARE ONE</button>
      <button onClick={handleShareMany}>SHARE MANY</button>
    </Container>
  );
}

export default App;

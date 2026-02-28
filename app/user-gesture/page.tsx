'use client';

export default function UserGesturePage() {
  const handleClickWindowOpen = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleClickBrowserPIP = () => {
    const videoElement = document.getElementById('video') as HTMLVideoElement;

    if (videoElement) {
      videoElement.requestPictureInPicture();
    }
  };

  const handleBothPIPAndWindowOpenActions = () => {
    handleClickBrowserPIP();
    handleClickWindowOpen();
  };

  const handleBothWindowOpenAndPIPActions = () => {
    handleClickWindowOpen();
    handleClickBrowserPIP();
  };

  return (
    <section className="p-10">
      <div className="flex flex-row gap-4">
        <button onClick={handleClickWindowOpen}>[Window Open]</button>
        <button onClick={handleClickBrowserPIP}>[Browser PIP]</button>
        <button onClick={handleBothPIPAndWindowOpenActions}>[Both PIP and Window Open]</button>
        <button onClick={handleBothWindowOpenAndPIPActions}>[Both Window Open and PIP]</button>
      </div>

      <div className="pt-10">
        <video id="video" src="https://www.w3schools.com/tags/mov_bbb.mp4" />
      </div>
    </section>
  );
}

// const handleClickWindowOpen = () => {
//   // window.location.href = 'https://www.google.com'; - 마찬가지인 듯
//   window.open('https://www.google.com', '_blank');
// };

// const handleClickBrowserPIP = async () => {
//   const videoElement = document.getElementById('video') as HTMLVideoElement;
//   if (videoElement) {
//     await videoElement.requestPictureInPicture();
//   }
// };

// const handleBothActions = async () => {
//   await handleClickBrowserPIP();
//   // .then(handleClickWindowOpen);
// };

import download from "../images/portfolioimages/download.png"

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Path to your PDF file in the public folder
    link.download = 'atletlgomezresume.pdf'; // The name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} id="download">
      <img src={download} alt="download-icon"></img>
    </button>
  );
}
  
  export default DownloadButton;
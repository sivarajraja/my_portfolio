import React from 'react';

const DownloadButton = () => {
  const resume_link = "https://drive.google.com/uc?export=download&id=1j9tLFFEK9z_8DjW0hBxlFEkI-az50S8O";

  return (
    <a
      href={resume_link}
      download="sivarajVR_Resume.pdf"
      className="bg-red-600 text-white text-center font-bold w-52 mb-5 md:ml-40 py-2 px-4 rounded hover:bg-red-400 transition duration-300 ease-in-out"
    >
      Download Here
    </a>
  );
};

export default DownloadButton;

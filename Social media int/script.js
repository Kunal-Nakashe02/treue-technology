// download resume
const downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", function () {
    const resumeFile = 'CV_2023.pdf';
    
    //  a link trigger the download
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = 'CV_2023.pdf';
    link.click();
});

// to hire me
const hireMeButton = document.getElementById("hireMeButton");

hireMeButton.addEventListener("click", function () {
    const whatsappNumber = '7066396598';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink);
});

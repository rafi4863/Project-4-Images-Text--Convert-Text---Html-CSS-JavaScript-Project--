
const extractText = () => {
  const fileInput = document.getElementById('imageInput');
  const outputBox = document.getElementById('outputBox');

  imageFile = fileInput.files[0];

  if (!fileInput) {
    outputBox.textContent = 'Please select an image file';
    return;
  }

  Tesseract.recognize(
    imageFile,
    'eng'
  ).then(({data}) => {
    outputBox.textContent = data.text;
  }).catch((error) => {
        console.error('error', error);
        outputBox.textContent = 'Please Select an image';
  })
  
};
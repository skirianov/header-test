const canvas = document.getElementById("iphone-12-pro-max-lt");
const canvasDk = document.getElementById("iphone-12-pro-max-dk");
const context = canvas.getContext("2d");
const contextDk = canvasDk.getContext("2d");
const upload = document.getElementById('upload');

const height = canvas.height;
const width = canvas.width;

const drawing = new Image();
drawing.src = new URL("./assets/iphone-lt.png", import.meta.url);
drawing.onload = () => {
  context.drawImage(drawing, 0, 0, canvas.width, canvas.height);
};

const drawingDk = new Image();
drawingDk.src = new URL("./assets/iphone-dk.png", import.meta.url);
drawingDk.onload = () => {
  contextDk.drawImage(drawingDk, 0, 0, canvas.width, canvas.height);
};

const sampleHeader = new URL("./assets/test.webp", import.meta.url);


const drawHeader = (image) => {
  const header = new Image();
  header.src = image;
  header.onload = () => {
  context.drawImage(header, 22, 19, width*0.9, height*0.58);
  context.drawImage(drawing, 0, 0, canvas.width, canvas.height);
  contextDk.drawImage(header, 22, 19, width*0.9, height*0.58);
  contextDk.drawImage(drawingDk, 0, 0, canvas.width, canvas.height);
}
}

drawHeader(sampleHeader);
const createURL = async (image) => {
  const url = await URL.createObjectURL(image);
  return url;
};

upload.onchange = async () => {
  const userFile = upload.files[0];
  const userImg = await createURL(userFile);
  drawHeader(userImg);
}

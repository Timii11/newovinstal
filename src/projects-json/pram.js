const cache = {};
function importAll(r) { r.keys().forEach((key) => (cache[key] = r(key))); }
importAll(require.context("../imagefirstpage", false, /\.(png|jpe?g|svg)$/));
const images = { image: {}, text: [], }

function getImages() { Object.entries(cache).forEach((module, index) => ( images.image[index] = module[1].default, images.text[index] = module[0].replace("./", "") )); }
    
getImages()

const img = imgtext => { return images.image[images.text.indexOf(imgtext) ]; }


export const pram = [
   {

     title:"Verificari pram in locuinte",
     images:[{
      src:img("back1.jpg"),
      width: 3,
      height: 2
    },
    {
      src:img("back2.jpg"),
      width: 2,
      height: 2
    },
    {
      src:img("back3.jpg"),
      width: 3,
      height: 2
    }
  
  ]},
  {

    title:"Titlu 2",
    images:[{
     src:img("back1.jpg"),
     width: 3,
     height: 2
   },
   {
     src:img("back2.jpg"),
     width: 2,
     height: 2
   },
   {
    src:img("pram.jpg"),
    width: 2,
    height: 2
  }
  
  ]}

  ];
  
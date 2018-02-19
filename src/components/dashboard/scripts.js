(function() {
  addScript('/src/firebase/config.js');
  addScript('/src/firebase/firestore.js');  
  addScript('/src/components/dashboard/main.js');  
  addScript('/src/components/layout/nav/main.js');    
  addScript('/src/components/dashboard/header/main.js');  

  function addScript(src){
    var head = document.head;
    var script = document.createElement('script');
    script.type= 'text/javascript';
    script.src= src;
    head.appendChild(script);
  }
})()
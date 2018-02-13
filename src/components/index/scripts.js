(function() {
  addScript('/src/firebase/config.js');
  addScript('/src/firebase/Auth.js');  
  addScript('/src/components/index/main.js');  
  addScript('/src/components/layout/nav/main.js');   

  function addScript(src){
    var head = document.head;
    var script = document.createElement('script');
    script.type= 'text/javascript';
    script.src= src;
    head.appendChild(script);
  }
})()
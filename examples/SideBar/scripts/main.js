require.config({
  baseUrl: "./"
  ,packages : [
     { name: "skylark-utils", location: "../../lib/skylark-utils-v0.9.0/uncompressed/skylark-utils" },
     { name: "skylark-router", location: "../../lib/skylark-router-v0.9.0/uncompressed/skylark-router" },
     { name: "skylarkjs", location: "../../dist/uncompressed/skylarkjs" }
  ]
  , paths: {
	"text" : "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
  }
});
 
require(["skylarkjs/spa","scripts/config"], function (spa,config) {
  var app = spa(config);
  window.go =  function(path) {
     app.go(path);
  };
  
  app.prepare().then(function(){
    app.run();
  })

});
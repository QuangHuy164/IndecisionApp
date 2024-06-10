 console.log('App.js is running!');

 var template = (
   <div>
     <h1>It changedddddd</h1> 
     <p>siuuu</p>
     <ol>
        <li>Item One</li>
        <li>Item Two</li>
     </ol>
   </div>
);

var myName = (
  <div>
    <h1>Huy Nguyen</h1>
    <p>Age: 21</p>
    <p>Location: Helsinki</p>
  </div>
);
 var appRoot = document.getElementById('app');

 ReactDOM.render(template, appRoot, myName);
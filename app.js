/* const heading = React.createElement("h1", {id:321, xyz:abc}, "Hello World from React");
 console.log(heading);//It gives react element nothing but javascript  object */
        /* const root = ReactDOM. createRoot(document.getElementById("root"));
        root.render(parent);  */
        
const parent = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"}, [
         React.createElement("h1",{}, "I am h1 tag"),
         React.createElement("h1",{}, "I am h1 tag")

    ]),
    React.createElement("div",{id:"child2"}, [
        React.createElement("h2",{}, "I am h1 tag"),
        React.createElement("h2",{}, "I am h1 tag")

   ])]
)  ;      
console.log(parent);    
const root = ReactDOM. createRoot(document.getElementById("root"));
        root.render(parent); 
        
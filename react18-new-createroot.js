// https://infoheap.com/online-react-jsx-to-javascript/

const LazyText = React.lazy(()=>import("./Text.js"));

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LazyText,null, "test"));


//ReactDOM.render(React.createElement(
//  React.Fragment,
//  null,
//  React.createElement(
//    LazyText,
//    null,
//    'test'
//  )
//), document.getElementById('root'));
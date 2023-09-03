// https://infoheap.com/online-react-jsx-to-javascript/

const LazyText = React.lazy(()=>import("./Text.js"));

ReactDOM.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    LazyText,
    null,
    'test'
  )
), document.getElementById('root'));
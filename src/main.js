import htm from './htm.js';
const html = htm.bind(createElement);

const App = () => {
  return(html`
    <h1>Pure React.js project without toolchain.</h1>
  `);
}

ReactDOM.render(html`
  <${App} />`,
  document.getElementById('root')
);
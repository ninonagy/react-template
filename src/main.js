import htm from './htm.js';
const html = htm.bind(createElement);

import ButtonToggle from "./components/Component.js";

const App = () => {
  return(html`
    <div>
      <h1>Pure React.js project without toolchain.</h1>
      <${ButtonToggle} 
        children=${html`
          <div>
            Avoid transpilers and toolchains like Babel and Webpack. 
            Instead of JSX you use ${' '}
            <a href="https://github.com/developit/htm">htm</a>.
          </div>
        `}
      />
    </div>
  `);
}

ReactDOM.render(html`
  <${App} />`,
  document.getElementById('root')
);
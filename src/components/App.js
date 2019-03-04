import html from './htm.js';
import css from './cxs.js';

export default () => (html`
  <div className='${style}'>
    <h1>Welcome to minimal React App!</h1>
  </div>`
);

const style = css({
  color: 'grey'
});
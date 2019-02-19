import htm from '../htm.js';
const html = htm.bind(createElement);

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return(html`
      <div>
        <button onClick="${this.handleClick}">
          ${this.state.show ? 'Hide' : 'Show' }
        </button>
        ${this.state.show && this.props.children}
      </div>
    `);
  }
}

export default Component;
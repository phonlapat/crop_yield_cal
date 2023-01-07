class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(item) {
    this.setState(state => {
      const items = state.items.concat(item);
      return {
        items
      };
    });
  }

  render() {
    return (
      <div>
        <AddItemForm onAddItem={this.handleAddItem} />
        <ItemTable items={this.state.items} />
      </div>
    );
  }
}

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

class ItemTable extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <ItemList />,
  document.getElementById("root")
);

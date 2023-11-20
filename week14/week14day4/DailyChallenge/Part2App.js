class App extends Component {
 
    handleSubmit = async (e) => {
      e.preventDefault();
      const inputValue = e.target.elements.inputField.value;
  
      try {
        const response = await fetch('http://localhost:5000/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value: inputValue }),
        });
        const data = await response.json();
        console.log('Response from server:', data.message);
        this.setState({ message: data.message });
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };
  
    render() {
      return (
        <div className="App">
          <h1>{this.state.message}</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter something:
              <input type="text" name="inputField" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
  
  export default App;
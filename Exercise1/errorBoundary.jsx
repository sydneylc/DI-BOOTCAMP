import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    return (
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {this.state.error && this.state.error.toString()}
        <br />
        {this.state.errorInfo && this.state.errorInfo.componentStack}
      </details>
    );
  }
}

export default ErrorBoundary;
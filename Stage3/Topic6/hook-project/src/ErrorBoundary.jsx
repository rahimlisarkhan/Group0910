import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
    // You can also log the error to an error reporting service
  }

  componentDidMount() {
    console.log("ErrorBoundary mounted");
  }

  componentWillUnmount() {
    console.log("ErrorBoundary unmounted");
  }

  componentDidUpdate() {
    console.log("ErrorBoundary updated");
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

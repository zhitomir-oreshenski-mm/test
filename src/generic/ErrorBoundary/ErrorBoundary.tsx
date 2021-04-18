import React from 'react';

class ErrorBoundary extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidCatch(error: any) {
    console.log(error);
  }

  static getDerivedStateFromError() {
    return <div>The system has found an unrecoverable error.</div>;
  }

  render() {
    return this.props.children;
  }
}

export { ErrorBoundary };

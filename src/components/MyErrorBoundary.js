import React from 'react';
import { Alert, Heading5 } from "@material-tailwind/react";

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <>
        <Alert color="grey"><Heading5 align="center">Something went wrong !! Please try later. . . .</Heading5></Alert>

      </>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallbackUI?: ReactNode;
}

interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // update the state for next render to show fallback
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallbackUI ?? <h1>Sorry... there was an error</h1>;
    }
    return this.props.children;
  }
}

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallbackUI?: ReactNode;
}

interface State {
  hasError: boolean;
}

const FallBackUI = (): JSX.Element => {
  return (
    <div className=" flex-auto items-center bg-rose-500 px-4 md:container md:mx-auto ">
      <h1 className="text-white-500 text-center ">
        Sorry... there was an error
      </h1>
    </div>
  );
};
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

  public render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallbackUI ?? <FallBackUI />;
    }
    return this.props.children;
  }
}

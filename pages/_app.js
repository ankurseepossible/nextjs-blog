import App from "next/app";
import "../styles/global.css";

export default class MyApp extends App {
  state = {
    isLoading: false,
  };

  showLoader = () => {
    this.setState({
      isLoading: true,
    });
  };

  showLoader = () => {
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

import App from "next/app";
import "../styles/global.css";
import UserContext from "../components/UserContext";

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
      <UserContext.Provider
        value={{
          isLoading: this.state.isLoading,
          showLoader: this.showLoader,
          hideLoader: this.hideLoader,
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { MovieInfo } from "../components/Movie";

class Detail extends React.Component<
  RouteComponentProps<Record<string, never>, Record<string, never>, MovieInfo>
> {
  componentDidMount(): void {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render(): React.ReactNode {
    const { location } = this.props;
    return <span>{location.state?.title}</span>;
  }
}

export default Detail;

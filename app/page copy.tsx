import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


class Hello extends React.Component {
	static defaultProps = {
	  name: 'World'
	}
  
	render() {
	  return <h1>Hello, {this.props.name}</h1>;
	}
  }
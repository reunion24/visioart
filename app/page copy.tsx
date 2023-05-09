import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


//class Home extends React.Component {
//	static Props = {
//	  name: 'World'
//	}
  
//	render() {
//	  return <h1>Hello, {this.props.name}</h1>;
//	}
//  }



interface Props {
  name: 'World';
}

class Hello extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Hello;
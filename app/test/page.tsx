import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

interface Props {
  name: string;
}

class Visioart extends React.Component<Props> {
  static defaultProps = {
    name: 'visioart.io'
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Visioart;

//function visioart.io React.Component {
	//static Props = {
	//  name: 'visioart.io'
	//}
  
//	render() {
	//  return <h1>Hello, {this.props.name}</h1>
//	}
 // }



//interface Props {
  //name: 'World'
//}

//export default async function Home() {
  
  //  return <h1>Hello, {this.props.name}</h1>
  
//}

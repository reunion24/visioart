import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

//interface VisioartComponentProps {
//  name: string;
//}

//interface VisioartComponentState {
//  count: number;
//}

//class VisioartComponent extends React.Component<VisioartComponentProps, VisioartComponentState> 
//{
  //constructor(props: VisioartComponentProps) {

  //  static defaultVisioartComponentProps = {
    //  name: 'visioart.io'
    //}
    //render(): React.ReactNode {

    //return <h1>Hello, {this.props.name}</h1>
//}  
//}

//export default VisioartComponent;

class Particles extends React.Component {
	static Props = {
	  name: 'visioart.io'
	}
  
render() {
  return <h1>Hello, {this.props.name}</h1>
	}
 }



//interface Props {
  //name: 'World'
//}

//export default async function Home() {
  
  //  return <h1>Hello, {this.props.name}</h1>
  
//}

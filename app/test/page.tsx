import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom/client";
import Particles from "../components/particles";
import VisioartComponent from "../components/visioartcomp";


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



//interface Props {
  //name: 'World'
//}


export default async function Home() {

	return (
<VisioartComponent
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
  
  )
  
}

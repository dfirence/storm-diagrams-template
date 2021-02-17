import React from "react";

import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
//import "./App.css";

export default function PlaybookViewer() {
  //1) setup the diagram engine
  var engine = createEngine();
  //2) setup the diagram model
  var model = new DiagramModel();
  //3-A) create a default node
  var node = new DefaultNodeModel({
    name: "Execution",
    color: "#FFFFFF",
  });
  node.setPosition(100, 100);
  node.addOutPort("T1234");
  console.log(`Node Options: ${JSON.stringify(node.getOptions())}`);


  var port1 = node.addInPort("T13579");
  var node2 = new DefaultNodeModel({
    name: "Execution",
    color: "#FFFFFF",
  });
  node.setPosition(200, 200);
  var port2 = node2.addInPort("INPUT");
  let link1 = port1.link(port2);
  //link1.getOptions().testName = "Test";
  //link1.addLabel("Hello World!");
  //4) add the models to the root graph
  model.addAll(node, node2, link1);

  //5) load model into engine
  engine.setModel(model);
  return <CanvasWidget engine={engine} className="canvas" />
}
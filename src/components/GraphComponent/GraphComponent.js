import React, { useEffect, useRef } from 'react';
import mxGraph from 'mxgraph';

// Initialize mxGraph components
const mx = mxGraph();
const { mxClient, mxGraph: MXGraph, mxGraphModel, mxUtils } = mx;

const GraphComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!mxClient.isBrowserSupported()) {
      mxUtils.error('Browser is not supported!', 200, false);
      return;
    }

    const container = containerRef.current;
    const model = new mxGraphModel();
    const graph = new MXGraph(container, model);

    graph.setEnabled(true);

    const parent = graph.getDefaultParent();

    model.beginUpdate();
    try {
      const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
      const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      graph.insertEdge(parent, null, '', v1, v2);
    } finally {
      model.endUpdate();
    }

    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '400px', border: '1px solid black' }} />
  );
};

export default GraphComponent;

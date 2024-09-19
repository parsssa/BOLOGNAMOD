import React, { useEffect, useRef } from 'react';
import './GraphStyles.css'; // Importa gli stili specifici per il componente

const GraphComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.mxClient && containerRef.current) {
      const container = containerRef.current;

      if (!window.mxClient.isBrowserSupported()) {
        window.mxUtils.error('Browser is not supported!', 200, false);
        return;
      }

      window.mxBasePath = 'javascript/src';
      window.mxGraph = new window.mxGraph(container);

      const graph = window.mxGraph;
      const model = graph.getModel();

      model.beginUpdate();
      try {
        const parent = graph.getDefaultParent();
        const v1 = graph.insertVertex(parent, null, 'Hello', 20, 20, 80, 30);
        const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
        graph.insertEdge(parent, null, '', v1, v2);
      } finally {
        model.endUpdate();
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="graph-container" // Usa le classi CSS per il layout
    />
  );
};

export default GraphComponent;

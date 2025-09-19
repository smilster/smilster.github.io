
// PHASE SPACE  

function initializeScatterPlot() {
  //     if ( N == 1) { x=X; v=V; }
  // x.splice(1024);
  // v.splice(1024);


  Plotly.newPlot('scatter',
    [{

      x: particles.map(particle => particle.positionX),
      y: particles.map(particle => particle.positionY),
      autosize: false,
      mode: 'markers',
      type: 'scattergl',
      marker: {
        size: 15,
        // symbol: 'square',
        // color: 'rgba(220,10,100, 1)',
        color: 'rgba(255, 0, 0, 0.5)',
        // opacity: 0.5,
        // Math.max(0.8 - N / 500, 0.1)
        line: {
          color: 'rgba(255, 255, 255, 0)',
        }
      },
    }], {
    //   title: 'Customized Scatter Plot',
    xaxis: {
      //     title: 'PositionX',
      range: [- L, L],
      showgrid: false,
      dtick: 1,
      showticklabels: false,
      zeroline: false,
      showline: false,
      // linecolor: 'black',
      // linewidth: 2
    },
    yaxis: {
      //     title: 'PositionY',
      range: [-L, L],
      showgrid: false,
      dtick: 1,
      showticklabels: false,
      zeroline: false,
      showline: false,
      // scaleanchor: "x",  // This is the key property
      // scaleratio: 1,     // This ensures the ratio is 1
      // linecolor: 'black',
      // linewidth: 2
    },
    height: 1000,
    width: 1000,
    automargin: false,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
      pad: 0
    },
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
    paper_bgcolor: 'rgba(0, 0, 0, 0)',
  }, {
    staticPlot: true,
  });

}

function updateScatter() {
  const x = particles.map(particle => particle.positionX);
  const y = particles.map(particle => particle.positionY);
  Plotly.restyle('scatter', {
    x: [x],
    y: [y],
  }, [0]);
}








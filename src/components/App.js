import CodeArea from "./CodeArea"
import './App.css';
import React, { useState, useEffect } from 'react';
import FloatingActionButton from "./FloatingActionButton/FloatingActionButton";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import useBrowserStorage from "../utils/useBrowserStorage.js"
import NavBottom from "../components/FloatingActionButton/NavBottom.js"


function takeScreenShot(){
  html2canvas(document.getElementsByClassName("pane top-pane")[0]).then(function(canvas) {
    canvas.toBlob(function(blob) {
      saveAs(blob, "yawp-output.png");
});
})
}

const defaultHTML=
`
<!-- Edit HTML here -->
<canvas>
`
const defaultCSS=
`
html, body{
  padding:0px;
  margin:0px;
  background:#191a1d;
  font-family: 'VT323', monospace;
  color:#FFF;
  height:100%;
}

canvas {
  background:none;
  margin:auto;
  position:fixed;
  left:50%;
  top:50%;
  transform:translateX(-50%) translateY(-50%);
  
}
`

const defaultJS=
`
document.body.onload = function() {
  var canvasHidden = document.createElement('canvas')
  var ctxHidden = canvasHidden.getContext('2d') 
  var canvasShown = document.querySelector('canvas')
  canvasShown.width = 800
  canvasShown.height = 400
  var ctxShown = canvasShown.getContext('2d')

  

  function init() {
     canvasHidden.width = 800
     canvasHidden.height = 400

     ctxHidden.clearRect(0, 0, ctxHidden.width, ctxHidden.height)
     ctxHidden.textAlign = 'center'
     ctxHidden.textBaseLine = 'middle'
     ctxHidden.font = 'bold 100px VT323, monospace'
     ctxHidden.fillStyle = '#FFF';

     ctxHidden.fillText('HELLO YAWP', canvasHidden.width/2, canvasHidden.height/2)
     
     ctxShown.clearRect(0, 0, canvasShown.width, canvasShown.height)
     ctxShown.drawImage(canvasHidden, 0, 0)
     var i = 10; while(i--){ glitch() }
  }

  function glitch() {
     var width = 100 + Math.random()*100
     var height = 50 + Math.random()*50

     var x = Math.random()*canvasHidden.width
     var y = Math.random()*canvasHidden.height

     var dx = x + (Math.random() * 40 - 20)
     var dy = y + (Math.random() * 30 - 15)

     ctxShown.clearRect(x, y, width, height)
     ctxShown.fillStyle = '#4a6';
     //ctxShown.fillRect(x, y, width, height)
     ctxShown.drawImage(canvasHidden, x, y, width, height, dx, dy, width, height)
  }

  setInterval(function() {
      init()
  }, 1000/15)
}
`
function App() {
  const [html,setHTML]=useBrowserStorage("html",defaultHTML)
  const [css,setCSS]=useBrowserStorage("css",defaultCSS)
  const [js, setJS]=useBrowserStorage("js",defaultJS)
  const [srcDoc,setSrcDoc]=useState("")

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
      <html>
      <div id="output">
      <body> ${html}</body>
      </div>
      <style> ${css} </style>
      <script> ${js} </script>
      `)
    },250)
  })
  return (
    <>
    
     <div className="nav">
     </div>
      <div className="panel">
      <div className="pane top-pane">
        <CodeArea
          language="xml"
          displayName="HTML5"
          value={html}
          onChange={setHTML}
        />
        <CodeArea
          language="css"
          displayName="CSS3"
          value={css}
          onChange={setCSS}
        />
        <CodeArea
          language="javascript"
          displayName="Javascript"
          value={js}
          onChange={setJS}
        />
      </div>
      <div className="pane-iframe">
        <iframe id="iframe"
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
      </div>
      <FloatingActionButton handler={takeScreenShot}/>
      <NavBottom/>
    </>
  )
}

export default App;

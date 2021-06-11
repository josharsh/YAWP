import CodeArea from "./CodeArea"
import './App.css';
import React, { useState, useEffect } from 'react';
import FloatingActionButton from "./FloatingActionButton/FloatingActionButton";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import useBrowserStorage from "../utils/useBrowserStorage.js"
import NavBottom from "../components/FloatingActionButton/NavBottom.js"


function takeScreenShot(){
  html2canvas(document.body).then(function(canvas) {
    canvas.toBlob(function(blob) {
      saveAs(blob, "yawp-output.png");
});
})
}

function App() {
  const [html,setHTML]=useBrowserStorage("html","")
  const [css,setCSS]=useBrowserStorage("css","")
  const [js, setJS]=useBrowserStorage("js","")
  const [srcDoc,setSrcDoc]=useState("")

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
      <html>
      <body> ${html}</body>
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
        <iframe
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

import React from 'react';
import "./App.scss";
import styled from 'styled-components';
import {comercios} from "./comercios";


let NARANJA = "#ff5700";


const Banner = styled.div`
  border-bottom:1px solid transparent;
`

const Comercio= styled.section`

   transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
   
.comercio{
  border:1px solid #e4e4e4;
  overflow: hidden;
  position: relative;
  display: block;
   transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);

  .recuadro{
    opacity: .2;
  }

  .back-enlace{
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border-radius: 50px;
    transform: translate(10%,50%) rotate(0deg) scale(1);
    z-index: 2;
    width: 100%;
    height: 100%;
     transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  p,a{
    position: absolute;
    display: block;
    top: 0;
    left: 0;
  }

  a{
    top:auto;
    bottom: 0;
    color: white;
    z-index: 5;
    padding: 1em;
    left: auto;
    right:0;
    transform:translateX(-100%);
    opacity:0;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    
    h4{font-size:18px; color:${NARANJA}}

  }
  
  &:hover{
    transform:scale(.9);
      background:${NARANJA};
  
    .back-enlace{
      transform: translate(10%,0%) rotate(76deg) scale(1.5);
    }
    a{
    transform:translateX(0);
    opacity:1;
    }
  }

}
`

const COMERCIO= ({url,img,nombre})=>{
  return(
      <Comercio className={"col-6 col-md-4 col-lg-3 p-1 "}>
        <div className="comercio">
        <p>{nombre}</p>
         <img src={img} className="imgr" alt=""/>
          <div className="back-enlace"></div>
          <a href={url} target={"_blank"}><h4><i>Ir al comercio</i></h4></a>
        </div>
      </Comercio>
  )

}


function App() {
  return (

      <div className="main-container">

        <div className="content">
          <header className="py-3 bgo wc">
            <div className="container f01 jcsb px-md-0">
              <div className="logo mt-2 " style={{flex:"0 0 120px",maxwidth: "180px"}}>
                <img src="img/epayco.png" alt="" style={{maxWidth:"100%"}}/>
              </div>
              <div className="logo l02  text-right" style={{flex:"1 0 120px",maxWidth:"300px"}}>
                <img src="img/davivienda.png" alt="" style={{maxWidth:"100%",maxwidth: "200px"}}/>
              </div>
            </div>
          </header>


          <Banner>
            <div className="container px-md-3 px-0">
                <img src="/img/banner.jpg" alt="" className={"imgr"}/>
            </div>
          </Banner>

          <div className="container py-4">
            <div className={"f01"}>
              {comercios.map(item =>
                  <COMERCIO
                      url={item.web}
                      nombre={item.url}
                      img={item.img}
                  />
              )}
            </div>
          </div>

          <footer className="py-3 bgb wc ">
            <div className="container f01 px-md-0">
              <div className="container f01 jcsb px-md-0">
                <div className="logo mt-2">
                  <img src="img/epayco.png" alt=""/>
                </div>
                <div className="logo l02">
                  <img src="img/davivienda.png" alt=""/>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

  );
}

export default App;

// import React from 'react'

// export default props => (
//     <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//           <li data-target="#myCarousel" data-slide-to="1"></li>
//           <li data-target="#myCarousel" data-slide-to="2"></li>
//         </ol>

//         <div className="carousel-inner" role="listbox">
//           <div className="item active">
//             <h4>"Fico muito feliz por ter uma equipe tão diversificada, qualificada e boa de serviço."<br></br><span>Jean George, Fundador e CEO</span></h4>
//           </div>
//           <div className="item">
//             <h4>"Como não gostar de trabalhar aqui?!"<br></br><span>Lucas Seta, Programador</span></h4>
//           </div>
//           <div className="item">
//             <h4>"A Jean George Inc. é uma empresa que consegue unir eficiência a ambiente inovador e leve, incrível!"<br></br><span>Chandler Bing, Especialista</span></h4>
//           </div>
//         </div>

//         <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//           <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//           <span className="sr-only">Anterior</span>
//         </a>
//         <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//           <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//           <span className="sr-only">Próximo</span>
//         </a>
//       </div>
// )

import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel class="carousel slide text-center" cellAlign="center"
            renderCenterLeftControls = {
                ({ previousSlide }) => (
                    <a className="left carousel-control" role="button" onClick={previousSlide}>
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                )
            }
            renderCenterRightControls = {
                ({ nextSlide }) => (
                    <a className="right carousel-control" role="button" onClick={nextSlide}>
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                )
            }
        >
           <div className="item">
             <h4 className="text-center">"Fico muito feliz por ter uma equipe tão diversificada, qualificada e boa de serviço."<br></br><span>Jean George, Fundador e CEO</span></h4>
           </div>
           <div className="item">
             <h4 className="text-center">"Como não gostar de trabalhar aqui?!"<br></br><span>Lucas Seta, Programador</span></h4>
           </div>
           <div className="item">
             <h4 className="text-center">"A Jean George Inc. é uma empresa que consegue unir eficiência a ambiente inovador e leve, incrível!"<br></br><span>Chandler Bing, Especialista</span></h4>
           </div>
      </Carousel>
    );
  }
}
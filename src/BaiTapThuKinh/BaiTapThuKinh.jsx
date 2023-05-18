import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import './BaiTapThuKinh.css';
export default class BaiTapThuKinh extends Component {

    state={
        glassesDefault:{
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    }




    renderGlassesList() {
        return dataGlasses.map((item,index)=>{
            return <img src={item.url} key={item.id} style={{width:'120px',cursor:'pointer',border:'solid 1px red'}} className='shadow m-2 p-3 rounded ' onClick={()=>{
                this.setState({
                    glassesDefault:{
                        "url": item.url,
                        "name": item.name,
                        "desc": item.desc,

                    }
                })
            }}></img>
        })
       
    }


    render() {
        const keyFrame = `@keyframes animationGlasses.${Date.now()}{
            from{
                width: 0;
            }
            to{
                width: 150px;
            }
        }`;

        const stylesGlasse = {
             width: '150px', 
             top: '75px', 
             right: '116px', 
             opacity: 0.6,
             animation:'animationGlasses${Date.now()} 5s',
        }


        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover',}}>
                <style>
                    {keyFrame}
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(238,99,99,0.5)',color:'white' }} className='fs-1 p-5'>TRY GLASSES APP ONLINE</h3>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 mt-5 text-center'>
                                <div className='position-relative'>
                                    <img className='position-absolute' src="./glassesImage/model.jpg" alt="...." style={{ width:'250px',border:'solid 1px red'}} />
                                    <img className='position-absolute ' src={this.state.glassesDefault.url} alt="" style={stylesGlasse} />
                                    <div className='position-relative text-center' style={{ width: '250px', height: '105px', top: '200px', left: '319px', backgroundColor: 'rgba(255,127,0,0.5)', textAlign: 'left' }}>
                                        <span className='fw-bold'>{this.state.glassesDefault.name}</span>
                                        <p>{this.state.glassesDefault.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mt-5 text-center'>
                                <img src="./glassesImage/model.jpg" alt="...." style={{ width:250,border:'solid 1px red' }} />
                            </div>
                        </div>
                    </div>
                <div className='bg-light container text-center mt-5 p-5 d-flex justify-content-center'>
                    {this.renderGlassesList()}
                </div>

                </div>
            </div>
        )
    }
}

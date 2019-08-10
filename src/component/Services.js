import React, { Component } from 'react'
import Title from './Title';
import {FaCoffee,FaCcMastercard,FaBicycle,FaWifi} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCoffee/>,
                title:"Free Coffee",
                info:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '
            },
            {
                icon:<FaCcMastercard/>,
                title:"Credit Card",
                info:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '
            },
            {
                icon:<FaBicycle/>,
                title:"Bicycle",
                info:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '
            },
            {
                icon:<FaWifi/>,
                title:"Free Wifi",
                info:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>
                        {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}

                </div>
                
            </section>
        )
    }
}

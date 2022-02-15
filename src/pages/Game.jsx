import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Unity, { UnityContext } from "react-unity-webgl";


const Game = () => {
    const url = "http://localhost:3000/assets/unity//Build";

    const unityContext = new UnityContext({
        loaderUrl: `${url}/WebGL.loader.js`,
        dataUrl: `${url}/WebGL.data`,
        frameworkUrl: `${url}/WebGl.framework.js`,
        codeUrl: `${url}/WebGL.wasm`,
    });


    console.log(unityContext)


    const [dataFilter] = useState(
        [
            {
                icon: 'icon-fl-sort-filled',
                name: 'Listings'
            },
            {
                icon: 'icon-fl-heart-filled',
                name: 'Like'
            },
            {
                icon: 'icon-fl-buy',
                name: 'Purchases'
            },
            {
                icon: 'icon-fl-discount',
                name: 'Sales'
            },
            {
                icon: 'icon-fl-logout',
                name: 'Transfer'
            },
            {
                icon: 'icon-fl-star',
                name: 'Burns'
            },
            {
                icon: 'icon-fl-credit-card',
                name: 'Bids'
            },
            {
                icon: 'icon-fl-users-filled',
                name: 'Followings'
            },
        ]
    )



    // const [visible, setVisible] = useState(5);
    // const showMoreItems = () => {
    //     setVisible((prevValue) => prevValue + 5);
    // }
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Game 1</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Games</Link></li>
                                    <li>Game 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-activity s1 tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                            <Unity 
                                unityContext={unityContext} 
                                style={{
                                    width: "100%",
                                    height: 600,
                                }} 
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">

                            <div id="side-bar" className="side-bar style-2">

                                <div className="widget widget-search mgbt-24">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your word art" required />
                                        <button><i className="icon-fl-search-filled"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget-filter style-2 mgbt-0">
                                    <h3 className="title-widget">Filter</h3>
                                    <ul className="box-check">
                                        {
                                            dataFilter.map((item, index) => (
                                                <li key={index}><Link to="#" className="box-widget-filter"><i className={item.icon}></i>{item.name}</Link></li>
                                            ))
                                        }

                                    </ul>
                                    <Link to="#" className="clear-check btn-filter style-2">
                                        Clear All Filters
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Game;

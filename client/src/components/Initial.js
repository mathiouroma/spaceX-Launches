import React, { Fragment, Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spacex_default from './spacex_default.jpg';
import spacex_default2 from './spacex_default2.jpg';
import spacex_default3 from './spacex_default3.jpg';

const HoverText = styled.h2`
	color: #000;
	:hover {
		opacity:0.5
		cursor: pointer;
	}
`

export class Initial extends Component {

    render() {
        return (
            <Fragment>
                <div className="row col-md-12" style={{
                    marginTop: 50, flexDirection: 'row', flex: 1, alignItems: 'flex-start',

                }}>
                    <div className="col-md-4">
                        <Link to={`/history`} style={{ textDecoration: 'none' }}>
                            <div className="card" style={{ backgroundColor: '', }}>


                                <HoverText style={{ textAlign: 'center', margin: 50, fontSize: 38, color: '#fff' }}>HISTORICAL EVENTS</HoverText>


                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to={`/future_launches`} style={{ textDecoration: 'none' }}>
                            <div className="card bg-primary text-white">


                                <HoverText style={{ textAlign: 'center', margin: 50, fontSize: 38 }}>FUTURE LAUNCHES</HoverText>


                            </div>
                        </Link>
                    </div>


                    <div className="col-md-4">
                        <Link to={`/launces`} style={{ textDecoration: 'none' }}>
                            <div className="card text-white">

                                <HoverText style={{ textAlign: 'center', margin: 50, fontSize: 38 }}>LAUNCHES</HoverText>

                            </div>
                        </Link>
                    </div>
                    {/* <div className="col-md-6">
                    <Link to={`/future_launches`} style={{ textDecoration: 'none' }}>
                        <div className="card bg-info text-white">
                            <div className="row">
                                <div className="col-md-12">
                                    <HoverText style={{ textAlign: 'center', margin: 50, fontSize: 38 }}>FUTURE LAUNCHES</HoverText>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div> */}
                </div>
                <div style={{ marginLeft: 30, marginRight: 60, marginTop: 50 }}>
                    <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} showArrows={false} showStatus={false} width='100%' >

                        <div>
                            <img src={spacex_default} alt="" style={{ width: '100%', height: 600 }} />
                        </div>
                        <div>
                            <img src={spacex_default2} alt="" style={{ width: '100%', height: 600 }} />
                        </div>
                        <div>
                            <img src={spacex_default3} alt="" style={{ width: '100%', height: 600 }} />
                        </div>

                    </Carousel>
                </div>
            </Fragment >
        )
    }
}

export default Initial;
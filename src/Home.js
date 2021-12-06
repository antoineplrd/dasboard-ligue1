import React from 'react';
import './App.css';


// mettre nos widget avec header et footer

import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
import Widget6 from './Components/Widget6';


class Home extends React.Component {

    render() {
        return (


            <div>
                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 order-lg-first order-md-last order-sm-last order-last">
                                <Widget1 />
                                <Widget3 />
                            </div>
                            <div className="col-lg-6 col-md-8 order-md-first order-sm-first">
                                <Widget6 />
                                <Widget2 />
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <Widget5 />
                                <Widget4 />
                            </div>
                        </div>

                    </div>
                </main>

                {/* <Footer /> */}

            </div>
        );
    }

}

export default Home;

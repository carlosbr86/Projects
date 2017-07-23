import React from 'react';
// import {Link} from 'react-router';

class About extends React.Component{

    render(){
        return(
            <div className="about">
                <h2> Stack</h2>
                <div className="row " >
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " >
                        <img width="250" height="120" src="https://www.bram.us/wordpress/wp-content/uploads/2016/06/javascript-logo-banner.jpg" />
                        <p/>
                        <img width="250" height="120" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv047ujVn9GS8CpiQGW6H62moxEu7hCGuGmDGiCrYIdEBoqu9M7IbBLik"/>
                        <p/> 
                        <img width="250" height="120" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png"/>
                        <p/>
                    </div>


                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " >
                        <img width="250" height="120" src="https://www.postgresql.org/media/img/about/press/slonik_with_black_text_and_tagline.gif"/>
                        <p/>
                        <img width="250" height="120" src="data:image/png;base64,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"/>
                        <p/>
                        <img width="250" height="120" src="http://femgineer.com/images/logos/github-logo.png"/>
                        <p/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;

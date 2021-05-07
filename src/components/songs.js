import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl' // react-intl


import './songs.css'



const Songs = ({title,image,song,artistName,Date}) => {
    const messagesInFrench = {
        myMessage: Date.slice(0,10),
      }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12" id="trasition">
                <div className="col-lg-12 card " id="cards">
                    <div className="row">
                        <div className="col-4 ">
                                <img className="m-1" key={image}  src={image} alt="Card cap"></img>
                        </div>
                        <div className="col-8" id="title">
                                <p key={artistName} className="col-12 card-text">
                                    <span>Title : </span>{(title!==undefined && title.length>50)?title.slice(0,50)+"...":title}<br></br>
                                    <span>Artist :</span> {( artistName!==undefined && artistName.length>20)?artistName.slice(0,20)+"...":artistName}


                                <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
                                    <p><span>Date : </span>
                                     <FormattedMessage
                                        id="myMessage"
                                        defaultMessage="{ts, date, ::yyyyMM}"
                                        // values={{ Date}}
                                     />
                                    </p>
                                </IntlProvider>
                                    
                                </p>
                                <audio className="col-12" controls>
                                        <source  key={song}src={song} type="audio/mpeg"></source>
                                </audio>
                        </div>

                        </div>
                    {/* <div className="col-4 card-body"></div> */}

                    
                </div>
        </div>
      
    );
};

export default Songs;
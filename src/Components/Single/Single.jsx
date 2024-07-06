import React from 'react'
import Style from "./index.module.css"
import Upcomming from '../Upcomming/Upcomming'
import YouTube from 'react-youtube'



const Single = ({ item, rec }) => {

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className={Style.wrapper}>
      {item ? (
        <div className={Style.singlePage}>
          <div className={Style.singlePage_wrap}>
            <div className={Style.singleHeading}>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className={Style.container}>
              {/* <video src={item.video} controls></video> */}
              {item && <YouTube videoId={item.key} opts={opts} />}
              <div className={Style.para}>
                <h3>Date : {item.date}</h3>
                <p>{item.desc}</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
              </div>
              <div className={Style.soical}>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
            </div>
          </div>
          {/* <Upcomming items={rec} title='Recommended Movies' /> */}
        </div>
      ) : (
        "no"
      )}
    </div>
  )
}

export default Single

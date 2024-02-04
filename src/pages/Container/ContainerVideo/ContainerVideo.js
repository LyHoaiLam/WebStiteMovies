
// import VideoContainer from '../../../Videos/Download.mp4'
// function ContainerVideo () {
//     return (
//         <video src={VideoContainer} />
//     )
// }

// export default ContainerVideo
import './ContainerVideo.css'
import React from 'react';
import VideoContainer from '../../../Videos/Download.mp4';

function ContainerVideo() {
    return (
        <video className='video-Container' controls autoPlay loop muted>
            <source src="https://cdn.discordapp.com/attachments/1203364722821308488/1203364808808730686/SampleVideo_1280x720_1mb.mp4?ex=65d0d3cf&is=65be5ecf&hm=39209999a4e8f522ae981d6a70fb11545e4a204531e5e38136abdf7e6be36af1&" type="video/mp4" />
        </video>
    );
}

export default ContainerVideo;

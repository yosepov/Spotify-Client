import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

type Props = {
    [x: string]: any
}

type Track = {
    href: string;
    id: number;
    disc_number: number;

}

const TrackView = (props: Props,) => {
const { track, accessToken } = props;
return (
    <>
        <div style={{
            width: "100%",
            display: "grid", 
            gridTemplateColumns: "repeat(6, 1fr)", 
            gridGap: 20, 
            margin: 0, 
            flexDirection:"column", 
            backgroundColor: "#000"}}>
            
            <img 
                src={track.album.images[0].url
                ? track.album.images[0].url 
                :require("../../assets/noImage.png")}
                style={{ height: "100%", width: 150, }}
                />
        
            <div style={{alignItems: "center", marginTop: 50}}>
                <p style={{color:"#fff"}}>
                    {track.name}
                </p>
            </div>

            <div style={{alignItems: "center", marginTop: 50}}>
            <p style={{color:"white"}}>
                    Artist: 
                </p>
                <p style={{color:"white"}}>
                    {track.album.artists[0].name}
                </p>
            </div>

            <div style={{alignItems: "center", marginTop: 50}}>
                <p style={{color:"white"}}>
                    Release Date: 
                </p>
                <p style={{color:"white"}}>
                    {track.album.release_date}
                </p>
            </div>


            <div style={{alignItems: "center", marginTop: 50}}>
            <p style={{color:"white"}}>
                    Total Tracks:
                </p>
                <p style={{color:"white"}}>
                    {track.album.total_tracks}
                </p>
            </div>
        </div>
        <div style={{alignItems: "center", backgroundColor: "#66DE93", width: "50%", alignSelf: "center", marginBottom: 50}}>
                <a  style={{color: "#fff",
                fontSize: 28,
                    textDecoration: 'none',}}
                    href={track.album.external_urls.spotify}>
                    Open in Spotify
                </a>
            </div>
        
        <div style={{backgroundColor: "#808080"}}>
            <SpotifyPlayer token={accessToken} autoPlay={false} uris={["spotify:artist:1mcTU81TzQhprhouKaTkpq"]} />
        </div>
    </>
  )
}

export default TrackView;
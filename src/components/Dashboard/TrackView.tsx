import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import TrackLyricsParamsType from '../types/TrackLyricsParamsType';

type Props = {
    [x: string]: any
}



const TrackView = (props: Props,) => {
const { track } = props;
const [lyricsPressed, setLyricsPressed] = useState<TrackLyricsParamsType>()
const [lyrics, setLyrics] = useState("")
const [isLoading, setIsLoading] = useState<boolean>(false)




useEffect(() => {
  if(!lyricsPressed) return;

  axios.get("http://localhost:3006/lyrics", {
    params: {
      track: lyricsPressed.title,
      artist: lyricsPressed.artist,

    }
  }).then(res => setLyrics(res.data.lyrics));
},[lyricsPressed])
const lyricsObj = {
    title: track.name,
    artist: track.album.artists[0].name,
}
const onPressLyrics = () => {
    setIsLoading(true);
    setLyricsPressed(lyricsObj);
    setTimeout(() => {
        console.log(lyrics)
        setIsLoading(false);
    }, 3000)
  }

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
                <p style={{color:"#808080"}}>
                    {track.album.artists[0].name}
                </p>
            </div>

            <div style={{alignItems: "center", marginTop: 50}}>
                <p style={{color:"#fff"}}>
                    Release Date: 
                </p>
                <p style={{color:"#808080"}}>
                    {track.album.release_date}
                </p>
            </div>


            <div style={{alignItems: "center", marginTop: 50}}>
            <p style={{color:"#fff"}}>
                    Total Tracks:
                </p>
                <p style={{color:"#808080", alignSelf:'center', alignItems:'center'}}>
                    {track.album.total_tracks}
                </p>
            </div>
            
            <div 
            onClick={onPressLyrics}
            style={{
                alignItems: "center", 
                marginTop: 50, 
                cursor:"pointer"}}>

                {isLoading ?
                <>
                <CircularProgress color="secondary" />
                <p style={{color:lyrics !== "No Lyrics Found"? "#66DE93" : "#ff0000"}}>
                    {lyrics !== "No Lyrics Found" ? "Check your console" : lyrics}
                </p>
                </>:
                    <p style={{color:"#66DE93"}}>
                    Lyrics
                </p>}
            </div>
        </div>

        <div style={{alignItems: "center", backgroundColor: "#66DE93", width: "100%", alignSelf: "center"}}>
        <iframe 
            src={`https://open.spotify.com/embed/album/${track.album.id.toString()}`} 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allowTransparency={true} 
            allow="encrypted-media">
        </iframe>
            </div>
    </>
  )
}

export default TrackView;
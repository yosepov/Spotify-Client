import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from '../Login/Login.Container';
import TrackLyricsParamsType from '../types/TrackLyricsParamsType';
import TrackView from './TrackView';

type Props = {
    code: string;
};

const spotifyApi = new SpotifyWebApi({
    clientId: "8b945ef10ea24755b83ac50cede405a0",
  });

const Dashboard = (props: Props) => {
    const { code } = props;
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([{}])
   
  useEffect(() => {
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  const searchFunction = (e: string) => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    console.log('now hopefully we have ' + accessToken);
    setSearch(e);
    spotifyApi.searchTracks(
      search.toString(), { limit: 6 })
      .then(res => {
        console.log(res.body.tracks?.items[0]);
          setSearchResults(res.body.tracks? res.body.tracks.items: []);
            console.log('searchResults' + searchResults[0])
        })
      .catch(err => console.log(err));
  };
  


    return(
        <>
        <form  noValidate autoComplete="off">
            <TextField id="standard-basic" label="Search" color="secondary"
            onChange={e => searchFunction(e.target.value)}
            style={{width: "100%",}} />
        </form>
        <div style={{backgroundColor: "black"}}>
        {(searchResults.length !== 1 && search) && (searchResults.map(item => {
          console.log(item);
          return <TrackView accessToken={accessToken} key={`${Math.random() * 1000}`}  track={item}/>}))}
          </div>

        </>
    );

};

export default Dashboard;
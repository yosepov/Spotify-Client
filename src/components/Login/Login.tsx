import React from 'react';
import { Button, Link } from '@material-ui/core';

const Login = () => {
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=3854053d6fa8411b9b4ffbc147b8bbef&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

return (<>
    <h1>Spotify API task</h1>
    <p>Using the Spotify API, create a single page application search engine.</p>
    <p>
your application should include the following:
    </p>
    <p>
1. A search field - should accept Unicode characters ✔️
    </p>
    <p>
2. A search button ✔️
    </p>
    <p>
3. Results view - each result should display at least 5 relevant types of data of your ✔️
    </p>
    <p>
choice (artist name, album name etc.), including at least one audio file  ✔️
    </p>
    <p>
    (provide player) and one visual file (image or video) ✔️ (player for primium users only) 
    </p>
    <p>
4. Sorting - by criteria of your choice, implementation of your choice ✔️
    </p>
    <p>
5. Filtering - by criteria of your choice, implementation of your choice✔️
    </p>
    <p>
Your application should be responsive with appropriate handling of at least three
breakpoints: desktop, tablet (portrait) and mobile (portrait). It is entirely up to you how ✔️
    </p>
    <p>
you display the app UI and data for each breakpoint.
You are encouraged to use any tool or framework you see fit.
    </p>
    <p>
Bonus points:
Add a second API to the application. How you use it, what data you choose to get or
send and how you choose to use or display that data is entirely up to you.
    </p>
    <p>
Most importantly - have fun!
    </p>
    <div style={{
        textDecoration: 'none',
        width: 180, 
        height:60,
        alignItems:'center', 
        alignSelf: 'center', 
        borderRadius: 25,
        borderWidth: 3, 
        borderColor: 'black', 
        border: '1px solid #808080'}}>

    <a  href={AUTH_URL}
     style={{
        textDecoration: 'none'}}>
            <p style={{marginLeft: 15}}> 
        Login With Spotify
            </p>
    </a>
        </div>
        </>
);
}

export default Login;
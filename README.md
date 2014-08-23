chrome-linkedin-oauth
=====================

**chrome-linkedin-oauth** demonstrates how to call LinkedIn APIs inside a Chrome application using **OAuth2**. Here is how we have implemented the auth flow:

### Step 1: 

Go to LinkedIn Developer Network (https://www.linkedin.com/secure/developer), create new application and generate consumer key and secret. use the callback URL in the following form:
https://CHROME_APP_ID.chromiumapp.org/ANYTHING_HERE
e.g. I've used this:
https://nlifplmndmkebhmmbbnipoiojlmbnnio.chromiumapp.org/linkedin_callback
Note: Path param ANYTHING_HERE is used to distinguish it with redirect URIs from other providers.

### Step 2: 

Prepare data to launch web auth flow: 

```
var apiKey = '75h1mayvrvgg53';
var redirectUri = 'https://nlifplmndmkebhmmbbnipoiojlmbnnio.chromiumapp.org/linkedin_callback';        
var state = "sdfiugsdfhkionmdndsfjksd"; //random string

var options = {
    'interactive': true,
    url:'https://www.linkedin.com/uas/oauth2/authorization?response_type=code'
        +'&client_id='+apiKey
        +'&scope=r_basicprofile'
        +'&state='+state
        +'&redirect_uri='+redirectUri
}
```

### Step 3:

Get the token:

```
chrome.identity.launchWebAuthFlow(options, function(redirect_url) {
    console.log('launchWebAuthFlow completed', chrome.runtime.lastError, redirect_url);
    processResponse(redirect_url);    
});
```

### Response:

![alt text](https://raw.githubusercontent.com/AnujaK/chrome-linkedin-oauth/master/assets/screenshot1.png "Access Permission")

![alt text](https://raw.githubusercontent.com/AnujaK/chrome-linkedin-oauth/master/assets/screenshot2.png "Token")

Copyright and License
==========

Copyright 2014 AnujaK (a.for.anuja@gmail.com)

Licensed under Apache License, Version 2.0

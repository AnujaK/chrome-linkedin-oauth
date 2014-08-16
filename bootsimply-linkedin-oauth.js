'use strict';

var BootSimply = (function () {

	var _name;

	var BootSimply = function (_name) {
		this._name = _name;
	};

	function makeApiCall() {

		var accessToken;

		getAccessToken();

		function getAccessToken() {
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

            chrome.identity.launchWebAuthFlow(options, function(redirect_url) {
                console.log('launchWebAuthFlow completed', chrome.runtime.lastError, redirect_url);
                processResponse(redirect_url);    
            });  
		}

		function processResponse(response) {
            document.querySelector('#token_response').innerText = JSON.stringify(response);
		}
		
	}
    
	BootSimply.prototype.oauthFlow = function () {
		makeApiCall();
		return "";
	}
	
	return BootSimply;

}());
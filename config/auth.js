module.exports = {
    'secretKey': process.env.SECRET_KEY,
    'facebookAuth' : {
      //  'clientID'      : process.env.FB_CLIENT_ID, // your App ID
            'clientID'      : '2289207358038106',
        'clientSecret'  : '333021b2952c3b3890027da3902026fa', // your App Secret
        'callbackURL'   : process.env.FB_CALLBACK
    },
    'googleAuth' : {
        'clientID'      : '301124823247-525nv6akapiqg3r1kh1v7decna9o2vsg.apps.googleusercontent.com',
        'clientSecret'  : 'UXBbfUvre7U9CiFGnzhQNvIJ',
        'callbackURL'   : process.env.GOOGLE_CALLBACK

    },
};

 helliio.init({i
    google: '1007282893537-d12afmkgp97mjfa1plp7g4caginmkam9.apps.googleusercontent.com'
  }, {
    redirect_uri: window.location.href
  });

 hello.on('auth.login', this.getUserInfo.bind(this));

 hello(auth.network).api('/me').then(user => {
   // set user data to the application state
  });

 AWS.config.region = 'us-east-1';
 AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1_jMxtU8DPE',
  ClientId: '39ke0tcj53fh9k77mefvqtrckg'
  Logins: {
    'accounts.google.com': auth.authResponse.id_token
   }
  });

  // get AWS credentials, so we can connect
  AWS.config.credentials.get(() => {
    // connect to cognito
    cognito.client = new AWS.CognitoSyncManager();

    // open or create new dataset
    cognito.client.openOrCreateDataset('DataSet', (err, dataset) => {
      cognito.dataSet = dataset;

      // get data from Cloud by the key
      dataset.get('DataKey', (err, data) => {
        // set data to the application state
      });

    });
  });

  cognito.dataSet.put('DataKey', 'DataValue', (err, record) => {
    // handler code here
  });

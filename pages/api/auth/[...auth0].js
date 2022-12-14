import {handleAuth, handleCallback, handleLogin} from '@auth0/nextjs-auth0';

export default handleAuth(
    {
        async login(req, res) {
            try {
                await handleLogin(req, res, {
                    authorizationParams: {
                        audience: 'https://hasura.io/learn', // or AUTH0_AUDIENCE
                        // Add the `offline_access` scope to also get a Refresh Token
                        scope: 'openid profile email read' // or AUTH0_SCOPE
                    }
                });
            } catch (error) {
                res.status(error.status || 400).end(error.message);
            }
        },
        async callback(req, res) {
            try {
                await handleCallback(req, res,  );
            } catch (error) {
                res.status(error.status || 500).end(error.message);
            }
        }
    }
);
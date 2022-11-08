import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./api-spec.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});

ui.initOAuth({
  appName: "small-things-to-do api specs",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: 'implicit'
});
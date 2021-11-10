/* eslint-disable @typescript-eslint/no-var-requires */
const { SiteClient } = require('datocms-client');

const datoClient = new SiteClient(process.env.NEXT_PUBLIC_GRAPHQL_TOKEN);

export default datoClient;

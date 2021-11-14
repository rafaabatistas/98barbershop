/* eslint-disable @typescript-eslint/no-var-requires */
const { SiteClient } = require('datocms-client');

const datoClient = new SiteClient(process.env.GRAPHQL_TOKEN);

import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function formSubmission(req: VercelRequest, res: VercelResponse) {
  const { dataForm } = req.body;
  const modelID = process.env.MODEL_ID || '';
  const data = { ...dataForm, itemType: modelID };
  await datoClient.items.create(data);
  return res.status(200).json({ message: 'success' });
}

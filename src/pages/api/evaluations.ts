/* eslint-disable @typescript-eslint/no-var-requires */
const { SiteClient } = require('datocms-client');

const datoClient = new SiteClient(process.env.GRAPHQL_TOKEN);

import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function formSubmission(req: VercelRequest, res: VercelResponse) {
  try {
    const { dataForm } = req.body;
    const modelID = process.env.MODEL_ID || '';
    const data = { ...dataForm, itemType: modelID };
    const { name, surname, answered, feedback, stars } = await datoClient.items.create(data);
    const dataResponse = {
      name: name,
      surname: surname,
      answered: answered,
      feedback: feedback,
      stars: stars
    };
    return res.status(200).json({ message: 'success', data: dataResponse });
  } catch (error) {
    return res.status(500).json({ message: 'error', error: error });
  }
}

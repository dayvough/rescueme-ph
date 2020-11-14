import { GraphQLClient, gql } from "graphql-request";

export default async function Submit(req, res) {
  const {
    names,
    contact_number,
    number_of_people,
    address,
    remarks,
  } = req.body;
  req.body.status = "new";

  // TODO: Validate inputs then do an if-else

  const endpoint = "https://rescueme-ph.hasura.app/v1/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const query = gql`
    mutation($data: rescue_requests_insert_input!) {
      insert_rescue_requests_one(object: $data) {
        id
      }
    }
  `;
  const variables = {
    data: req.body,
  };

  const data = await graphQLClient.request(query, variables);
  console.log(data);

  res.statusCode = 200;
  res.json({ rescue_id: data });
}

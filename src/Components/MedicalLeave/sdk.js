
import * as contentful from 'contentful';
//import * as contentfulManagement from 'contentful-management';
//import { log } from '../../utils';

const SPACE_ID = 'fzhvooy2sy96';
const ENVIRONMENT = 'master';
const ACCESS_TOKEN = 'BSS6P-xg34Wqx9CtGKvzk77AkG-u36VVYQrqlRSslho';
const ACCESS_TOKEN_MANAGEMENT =
  'CFPAT-WAjUteVc06b2IhNAw7_DXGQUXCmv0ZMc6_m9obcABag';
const CONTENT_TYPE = 'users';

const client = contentful.createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT, // defaults to 'master' if not set
    accessToken: ACCESS_TOKEN,
});
/*const clientManagement = contentfulManagement.createClient({
    accessToken: ACCESS_TOKEN_MANAGEMENT,
});*/

export function getEntries() {
  return client
    .getEntries({
      content_type: CONTENT_TYPE,
    })
    .then((result) => {
      //log('info', 'Data retrieved from contentful', result.items);
      return result.items;
    })
    .then((items) => {
      return dataTransformer(items);
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}

function dataTransformer(items) {
  return items.map((item) => {
    return itemTransformer(item);
  });
}

function itemTransformer({ fields, sys }) {
    return {
        ...fields,
        id: sys.id,
        createdAt: sys.createAt,
        updatedAt: sys.updatedAt,
    };
}

/*export function createEntry(payload) {
  return clientManagement
    .getSpace(SPACE_ID)
    .then((space) => space.getEnvironment(ENVIRONMENT))
    .then((environment) =>
      environment.createEntry(CONTENT_TYPE, bodyTransformer(payload))
    )
    .then((entry) => entry.publish())
    .catch((err) => {
      console.error(err);
    });
}*/

/*function bodyTransformer(payload) {
  const entries = Object.entries(payload);
  let fields = {};
  entries.forEach(([key, value]) => {
    fields[key] = {
      'en-US': value,
    };
  });
  return { fields };
}*/
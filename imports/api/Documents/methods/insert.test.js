import { Mongo } from 'meteor/mongo';
import Documents from '../Documents';
import insert from './insert';

const testDocument = { title: 'Test doc', body: 'Test doc body.' };
const testUserId = 'test-user-id';

test('Inserts a document into the documents collection.', () => {
  const expectedDocument = { ...testDocument, owner: testUserId };
  insert(testDocument, testUserId);
  expect(Documents.findOne({ ...testDocument, owner: testUserId })).toEqual(expectedDocument);
});

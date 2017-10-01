import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../Documents';

export default function (doc) {
  check(doc, {
    _id: String,
    title: String,
    body: String,
  });

  try {
    const documentId = doc._id;
    Documents.update(documentId, { $set: doc });
    return documentId; // Return _id so we can redirect to document after update.
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
}

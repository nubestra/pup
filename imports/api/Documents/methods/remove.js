import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../Documents';

export default function (documentId) {
  check(documentId, String);

  try {
    return Documents.remove(documentId);
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
}

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../Documents';

export default function (doc, userId) {
  check(doc, {
    title: String,
    body: String,
  });

  try {
    return Documents.insert({ owner: userId, ...doc });
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
}

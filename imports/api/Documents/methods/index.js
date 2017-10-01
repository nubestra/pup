import { Meteor } from 'meteor/meteor';
import rateLimit from '../../../modules/rate-limit';
import insert from './insert';
import update from './update';
import remove from './remove';

Meteor.methods({
  'documents.insert': function documentsInsert(doc) { // eslint-disable-line
    return insert(doc, this.userId);
  },
  'documents.update': function documentsUpdate(doc) { // eslint-disable-line
    return update(doc);
  },
  'documents.remove': function documentsRemove(documentId) { // eslint-disable-line
    return remove(documentId);
  },
});

rateLimit({
  methods: [
    'documents.insert',
    'documents.update',
    'documents.remove',
  ],
  limit: 5,
  timeRange: 1000,
});

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
import PageHeader from '../../components/PageHeader/PageHeader';
import Content from '../../components/Content/Content';

// if (Meteor.isClient) import './Page.css';

const Page = ({
  className, title, subtitle, content,
}) => (
  <div className={className}>
    <PageHeader title={title} subtitle={subtitle} />
    <Content content={content} />
  </div>
);

const PageWithStyles = styled(Page)`
  margin-bottom: 0px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

Page.defaultProps = {
  subtitle: '',
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
};

const pageContent = new ReactiveVar('');

export default withTracker(({ content, page }) => {
  if (Meteor.isClient && window) window.scrollTo(0, 0); // Force window to top of page.

  Meteor.call('utility.getPage', page, (error, response) => {
    if (error) {
      console.warn(error);
    } else {
      pageContent.set(response);
    }
  });

  return {
    content: content || pageContent.get(),
  };
})(PageWithStyles);

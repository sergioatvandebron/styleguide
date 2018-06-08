import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => (
  <div className="Van-DashboardHeaderDropdown-sectionHeader">{title}</div>
);

SectionHeader.propTypes = {
  title: PropTypes.node.isRequired
};

export default SectionHeader;

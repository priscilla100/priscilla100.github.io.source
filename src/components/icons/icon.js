import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAcm,
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconIEEE,
  IconElsevier,
  IconFolder,
  IconFork,
  IconGitHub,
  IconGoogleScholar,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconResearchGate,
  IconStar,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Acm':
      return <IconAcm />;
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'IEEE':
      return <IconIEEE />;
      case 'Elsevier':
        return <IconElsevier />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'GoogleScholar':
      return <IconGoogleScholar />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
      case 'ResearchGate':
        return <IconResearchGate />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
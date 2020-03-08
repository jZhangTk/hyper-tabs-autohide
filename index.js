exports.decorateConfig = config => {
  const css = `
    ${config.css || ''}
    .tabs_nav {
      visibility: hidden;
    }
    .terms_terms {
      margin-top: 0;
    }
    .header_header:hover {
      .tabs_nav {
        visibility: visible;
      }
      + .terms_terms {
        margin-top: 34px;
      }
    }
  `;

  return Object.assign({}, config, { css });
};

// Hide window controls on macOS
exports.decorateBrowserOptions = defaults =>
  Object.assign({}, defaults, {
    titleBarStyle: '',
    frame: false,
  });

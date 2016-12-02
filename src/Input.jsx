/**
 * Input Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const { needPolyfill } = require('./util');

class Input extends React.Component {

  componentDidMount() {
    this.updatePlaceholder();
  }

  componentDidUpdate() {
    this.updatePlaceholder();
  }

  updatePlaceholder() {
    if (!needPolyfill()) {
      return;
    }
    const input = this.input;
    const placeholder = this.placeholder;
    if (input.value !== '') {
      placeholder.style.display = 'none';
      return;
    }
    placeholder.style.display = 'block';
    // we'll suppose this is ie, which stores css props in `currentStyle`
    const inputStyle = input.currentStyle;

    if (inputStyle) {
      const topOffset = (parseInt(inputStyle.marginTop, 10) || 0) +
            (parseInt(inputStyle.paddingTop, 10) || 0) +
            (parseInt(inputStyle.borderTopWidth, 10) || 0);

      const leftOffset = (parseInt(inputStyle.marginLeft, 10) || 0) +
            (parseInt(inputStyle.paddingLeft, 10) || 0) +
            (parseInt(inputStyle.borderLeftWidth, 10) || 0);

      const { fontFamily, fontWeight, fontVariant, fontSize, fontStyle, lineHeight } = inputStyle;

      const placeholderStyle = placeholder.style;
      placeholderStyle.top = `${topOffset}px`;
      placeholderStyle.left = `${leftOffset}px`;
      placeholderStyle.fontFamily = fontFamily;
      placeholderStyle.fontWeight = fontWeight;
      placeholderStyle.fontVariant = fontVariant;
      placeholderStyle.fontSize = fontSize;
      placeholderStyle.fontStyle = fontStyle;
      placeholderStyle.lineHeight = lineHeight;
    }
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }

  renderPlaceholder() {
    const me = this;
    if (!needPolyfill()) {
      return null;
    }
    const placeholderStyle = {
      position: 'absolute',
      color: '#999999',
    };
    return (
      <div ref={me.saveRef('placeholder')} style={placeholderStyle}>{me.props.placeholder}</div>
    );
  }

  render() {
    const me = this;
    const wrapperStyle = { position: 'relative' };

    return (
      <div style={wrapperStyle}>
        <input {...me.props} ref={me.saveRef('input')} placeholder={needPolyfill() ? '' : me.props.placeholder} />
        {me.renderPlaceholder()}
      </div>
    );
  }
}

Input.defaultProps = {
};


// http://facebook.github.io/react/docs/reusable-components.html
Input.propTypes = {
};

Input.displayName = 'Input';

module.exports = Input;

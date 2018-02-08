import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShuffleIcon from 'svg-react-loader?name=ShuffleIcon!material-design-icons/av/svg/design/ic_shuffle_48px.svg?';

import createControlRenderProp from '../factories/createControlRenderProp';

class ShuffleButton extends PureComponent {
  render () {
    const { shuffle, onToggleShuffle } = this.props;
    return (
      <button
        className={classNames(
          'rrap__material_toggle rrap__audio_button rrap__shuffle_btn',
          { on: shuffle }
        )}
        onClick={onToggleShuffle}
      >
        <div className="inner foreground">
          <ShuffleIcon width="100%" height="100%" />
        </div>
      </button>
    );
  }
}

ShuffleButton.propTypes = {
  shuffle: PropTypes.bool.isRequired,
  onToggleShuffle: PropTypes.func.isRequired
};

export const renderShuffleButton = createControlRenderProp(ShuffleButton, [
  'shuffle',
  'onToggleShuffle'
]);

export default ShuffleButton;

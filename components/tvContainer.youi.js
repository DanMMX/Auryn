import React from 'react';
import { View } from '@youi/react-native-youi';
import ListItem from './listitem.youi';
import PropTypes from 'prop-types';

export default class TvContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() { // eslint-disable-line max-lines-per-function
    const { data, onPress, onFocus, focusable } = this.props;
    if (data.length !== 2) return null;
    return (
      <View>
          <ListItem
            focusable={focusable}
            onPress={onPress}
            onFocus={onFocus}
            shouldChangeFocus={false}
            imageType="Backdrop" size="Small"
            data={data[0]}
          />
          <ListItem
            focusable={focusable}
            onPress={onPress}
            onFocus={onFocus}
            shouldChangeFocus={false}
            imageType="Backdrop" size="Small"
            data={data[1]}
          />
      </View>
    );
  }
}

TvContainer.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onFocus: PropTypes.func,
  index: PropTypes.number,
  focusable: PropTypes.bool,
};

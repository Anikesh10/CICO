import React from 'react';
import {Appbar} from 'react-native-paper';

export default class ActionBar extends React.Component {
  _handleMore = () => console.log('Shown more');

  render() {
    let {onBack, title, subtitle} = this.props;
    return (
      <Appbar.Header
        dark={false}
        style={{
          backgroundColor: '#fcd737',
        }}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content title={title} subtitle={subtitle} />
        <Appbar.Action icon="more-vert" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}

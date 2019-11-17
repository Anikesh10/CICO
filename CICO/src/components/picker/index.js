import * as React from 'react';
import {Alert, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomPicker} from 'react-native-custom-picker';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class CustomExample extends React.Component {
  render() {
    let {onSelect, onClear} = this.props;
    return (
      <CustomPicker
        {...this.props}
        getLabel={item => item.label}
        fieldTemplate={setting => this.renderField(setting, onClear)}
        optionTemplate={this.renderOption}
        headerTemplate={this.renderHeader}
        onValueChange={onSelect && onSelect}
      />
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>Projects</Text>
      </View>
    );
  }

  renderFooter(action) {
    return (
      <TouchableOpacity
        style={styles.headerFooterContainer}
        onPress={() => {
          Alert.alert('Footer', "You've click the footer!", [
            {
              text: 'OK',
            },
            {
              text: 'Close Dropdown',
              onPress: action.close.bind(this),
            },
          ]);
        }}>
        <Text>This is footer, click me!</Text>
      </TouchableOpacity>
    );
  }

  renderField(settings, onClear) {
    const {selectedItem, defaultText, getLabel, clear} = settings;
    let isSelected = selectedItem;
    return (
      <DropdownBox isSelected={isSelected}>
        <TextWrapper isSelected={isSelected}>
          <DropdownText isSelected={isSelected}>
            {isSelected ? getLabel(selectedItem) : defaultText}
          </DropdownText>
        </TextWrapper>
        {isSelected ? (
          <StyledTouchable
            onPress={() => {
              isSelected && clear();
              isSelected && onClear();
            }}>
            <IconWrapper name="times-circle" size={30} isSelected />
          </StyledTouchable>
        ) : (
          <IconWrapper name="angle-down" size={30} />
        )}
      </DropdownBox>
    );
  }

  renderOption(settings) {
    const {item, getLabel} = settings;
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, {backgroundColor: item.color}]} />
          <Text style={{color: item.color, alignSelf: 'flex-start'}}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  }
}

export default CustomExample;

const DropdownBox = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: ${props =>
    props.isSelected
      ? props.theme.APP_COLOR.PRIMARY.TITLE
      : props.theme.APP_COLOR.PRIMARY.LEVEL_1};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
`;

const TextWrapper = styled.View``;

const DropdownText = styled.Text`
  ${props => `
    color: ${
      props.isSelected
        ? props.theme.APP_COLOR.PRIMARY.MAIN
        : props.theme.APP_COLOR.PRIMARY.TITLE
    }
    font-family: ${props.theme.FONT_FAMILY.PRIMARY.TITLE}
    font-size: 20px;
`}
`;

const IconWrapper = styled(Icon)`
  color: ${props =>
    props.isSelected
      ? props.theme.APP_COLOR.PRIMARY.MAIN
      : props.theme.APP_COLOR.PRIMARY.TITLE};
`;

const StyledTouchable = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 18,
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

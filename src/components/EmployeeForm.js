import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
      <Input
      label="Name"
      placeholder="jane"
      value={this.props.name}
      onChangeText={
        nameEntered => this.props.employeeUpdate({ prop: 'name', value: nameEntered })
      }
      />
      </CardSection>

      <CardSection>
      <Input
      label="Phone"
      placeholder="555-555-555"
      value={this.props.phone}
      onChangeText={
        phoneEntered => this.props.employeeUpdate({ prop: 'phone', value: phoneEntered })
      }
      />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerTextStyle}>Shift</Text>
      <Picker

      selectedValue={this.props.shift}
      onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
      >
      <Picker.Item label="Monday" value="Monday" />
      <Picker.Item label="Wednesday" value="Wednesday" />
      <Picker.Item label="Tuesday" value="Tuesday" />
      <Picker.Item label="Thrusday" value="Thrusday" />
      <Picker.Item label="Friday" value="Friday" />
      <Picker.Item label="Saturday" value="Saturday" />
      <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
};
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

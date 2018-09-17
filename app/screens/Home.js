import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'RUB';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '6826.37';
const TEMP_CONVERSION_RATE = 68.41;
const TEMP_CONVERSION_DATE = new Date();


class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };

  handleChangeText = (text) => {
    console.log('change text', text);
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  handleOptionsPress = () => {
    console.log('handle options press');
  };

  render() {
    return (
      <Container>
        <StatusBar 
          translucent={false}
          barStyle="default"
        />
        <Header 
          onPress={this.handleOptionsPress}
        />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          onPress={this.handlePressQuoteCurrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleSwapCurrency}
        />
      </Container>
    );
  }
}

export default Home;

import React ,{Component}  from 'react';
import styles from './styles'
import { ActivityIndicator,StyleSheet,View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


export default class StepProgress extends Component {
    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flex: 1,
            justifyContent: 'center'
        }
    };

    onStepComplete = () => {
        alert('Zakończono');
    };
    render(){
        const progressStepsStyle = {
            activeStepIconBorderColor: '#686868',
            activeLabelColor: '#686868',
            activeStepNumColor: 'white',
            activeStepIconColor: '#757575',
            completedStepIconColor: '#757575',
            completedProgressBarColor: '#686868',
            completedCheckColor: '#4bb543'
        };

        const buttonTextStyle = {
            color: '#686868',
            fontWeight: 'bold'
        };
        return (
            <View style = {styles.hookUseState.Container}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep
                        label="Pierwszy krok"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={styles.hookUseState.Text}
                        previousBtnTextStyle={styles.hookUseState.Text}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Pierwszy krok</Text>
                            <View style={[styles.container, styles.horizontal]}>

                                <ActivityIndicator size="large" color="#03fcf0" />
                            </View>

                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Drugi Krok"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={styles.hookUseState.Text}
                        previousBtnTextStyle={styles.hookUseState.Text}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Drugi Krok</Text>
                            <View style={[styles.container, styles.horizontal]}>

                                <ActivityIndicator size="large" color="#fc9931" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Trzeci Krok"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={styles.hookUseState.Text}
                        previousBtnTextStyle={styles.hookUseState.Text}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Trzeci Krok</Text>
                            <View style={[styles.container, styles.horizontal]}>

                                <ActivityIndicator size="small" color="#fc9067" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Czwarty Krok"
                        FinishBtnText={'Zakończ'}
                        onSubmit={this.onStepComplete}
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={styles.hookUseState.Text}
                        previousBtnTextStyle={styles.hookUseState.Text}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Czwarty Krok</Text>
                            <View style={[styles.container, styles.horizontal]}>

                                <ActivityIndicator size="small" color="#fc5578" />
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}


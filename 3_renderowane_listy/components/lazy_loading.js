import React ,{Component ,Suspense}  from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Lazy = React.lazy(() => import('./characters_generator'))

export default class LazyLoading extends Component {
    render(){
        return (
        <View style = {styles.restParameters.Container}>
            <View >
                <Text style = {styles.restParameters.Text}>Lazy Loading</Text>
            </View>
            <View style={styles.restParameters.Buttons} >
                <Suspense fallback={<Text>Loading...</Text>}>
                    <Lazy length="99999"/>
                </Suspense>
            </View>
        </View>
        );
    }
}
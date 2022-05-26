### Lab 5 - Obsługa gestów użytkownika

Do wykonania aplikacji użyte zostały:
- React Native
- Expo
- Expo go (testowanie na fizycznym urządzeniu)
- Android Studio (Emulator Pixel 3 do testów)
- Kod z poprzedniej aplikacji 

## home.js
![](assets/home.png)

    export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}  onPress={() => navigation.navigate('TextInput')} >
                <Text style={styles.home.Text}>Text Input</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('SelectPicker')} >
                <Text style={styles.home.Text}>Select Picker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('Switch')} >
                <Text style={styles.home.Text}>Switch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('DatePicker')} >
                <Text style={styles.home.Text}>Date Picker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('ActiveToast')} >
                <Text style={styles.home.Text}>Toast</Text>
            </TouchableOpacity>
        </View>
    );



### Lab 6 - Obsługa obrazów + tryb offline

Do wykonania aplikacji użyte zostały:
- React Native
- Expo
- Expo go (testowanie na fizycznym urządzeniu)
- Android Studio (Emulator Pixel 3 do testów)
- Kod z poprzedniej aplikacji 

## home.js
![](assets/home.png)

````js
    export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('Slider')} >
                <Text style={styles.home.Text}>Slider</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.home.Text}>LazyLoading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('ConnectionCheck')} >
                <Text style={styles.home.Text}>ConnectionCheck</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('AsyncStorageComponent')} >
                <Text style={styles.home.Text}>Async Storage Component</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('SyncData')} >
                <Text style={styles.home.Text}>SyncData</Text>
            </TouchableOpacity>
        </View>
    );
}
````

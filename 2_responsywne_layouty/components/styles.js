import { StyleSheet } from 'react-native';

const styles = {}
styles.home = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    Button: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 86,
        marginVertical: 48,
        borderRadius:10,
    },
    Text: {
        color:'#444',
        fontSize:24,
    },
});

styles.hookUseState = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ec4899',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Text: {
        color:'#000',
        fontSize:17,
    },
    Ex: {
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 15,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 8,
        fontSize: 24,
    },
    Buttons: {
        flexDirection: 'row',
    },
    Button: {
        flex: 1,
        backgroundColor: '#713FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        paddingVertical: 46,
        borderRadius:80,
        elevation: 10,
    }
});
styles.restParameters = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:128,
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Text: {
        color:'#000',
        fontSize:17,
    },
    TextEx: {
        color:'#fff',
        fontSize:16,
    },
    Ex: {
        flex: 1,
        backgroundColor: '#949494',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:16,
        fontSize:36,
    },
    Buttons: {
        flexDirection: 'row-reverse',
    },
    Button: {
        flex: 1,
        backgroundColor: '#BD8EFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        marginVertical: 10,
        paddingVertical: 16,
        borderRadius:10,
        elevation: 10,
    },
});
styles.spreadOperator = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#CCE8F0',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:64,
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Text: {
        color:'#000',
        fontSize:17,
    },
    TextEx: {
        color:'#000',
        fontSize:13,
    },
    Ex: {
        flex: 1,
        backgroundColor: '#F6FBFC',
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal:16,
        paddingVertical:16,
        fontSize:24,
    },
    Buttons: {
        flexDirection: 'row',
    },
    Button: {
        flex: 1,
        backgroundColor: '#62FAF5',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 32,
        elevation: 18,
    }
});


export default styles
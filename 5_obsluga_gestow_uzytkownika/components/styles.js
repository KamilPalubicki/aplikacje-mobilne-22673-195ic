import { StyleSheet } from 'react-native';
import sortFilter from "./text_input";

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
        marginHorizontal: 66,
        marginVertical: 28,
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
styles.SwitchScr = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#444',
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 45,
        alignItems: "center",
        shadowColor: "#ff0",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 5
    },
    button: {
        borderRadius: 50,
        padding: 30,
        elevation: 2,
        backgroundColor: "#453AAA",
    },

    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 40,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 80,
    }
});
styles.sortFilter = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#CDF8F0',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
    },
    homeContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    titleText: {
        color:'#000',
        fontSize:30,
    },
    text: {
        fontWeight:'bold',
        fontSize:15,
    },
    input: {
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
    }
});

styles.SelectPICK = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#BD8EFF',
        alignItems: "center",
        padding: 6,
        height: 340,
        marginTop:10,
        marginLeft:30,
    },
    selectContainer:{
        width: 300,
        padding: 22,
    },
    selectionContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,
        marginTop: 15,
        marginRight: 15,
    },
    container:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",

    },
    selection: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    pickerLabel: {
        fontSize: 10,
        fontWeight: "bold"
    },
    Button: {
        flex: 1,
        backgroundColor: '#713FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 86,
        marginVertical: 48,
        borderRadius:10,
    },
});
styles.DatePicker = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#A8A8A8',
        textAlignVertical : "center",
        paddingTop:100,
        paddingBottom:100
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#fff',
        textAlignVertical : "center",
        borderRadius:30,
        paddingTop:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    text:{
        color:'black',
        fontSize: 20,
        marginBottom: 100,
        marginLeft:100,
        alignItems: 'center',
        justifyContent: 'center',

    }
});
styles.Toast = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding:2,
    },
    modalContainer: {
        padding:10,
        paddingTop:10
    },
    modalText:{
        padding:3,
        paddingBottom:10,
        fontSize:40,
        textAlign:'center'
    },
    text:{
        fontSize:15,
        padding:1,
    },

});

export default styles
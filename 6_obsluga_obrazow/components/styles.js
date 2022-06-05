import { StyleSheet } from 'react-native';
import sortFilter from "./images";

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
        fontSize:30,
    },
    text: {
        color:'#444',
        fontSize:24,
    },
});

styles.content = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        paddingHorizontal:32,
        paddingVertical:32,
        height: '100%',
    },
    example:{
        backgroundColor: '#fa0',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:10,

    },
    text: {
        color:'#fa0',
        fontSize:20,
    },
    code:{
        color:'#000',
        fontSize:16,
    },
    buttons: {
        flexDirection:'row'
    },
    button:{
        backgroundColor: '#fa0',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginHorizontal: 15,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        height: "50px",
        borderRadius:10,
        borderColor: '#444',
        borderWidth: 5,
        width: 100,

    },
});

styles.flexbox2 = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 250,
        height: 150,
    },
    scrollViewIndicator:{
        alignContent:'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    scrollIndicatorStyle:{
        backgroundColor:'#fb1',
    },
    scrollIndicatorContainerStyle:{
        backgroundColor:'#555',
    },
});

styles.flexbox = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 400,
        height: 100,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});
styles.swipeScreen = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    listItem: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    text:{
        paddingTop:20,
        fontSize:30,
        textAlign:'center'
    }
});

styles.swipeScreen2 = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    listItem: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:40
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    text:{
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'right'
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
        fontSize:40,
        padding:1,
    },

});

export default styles
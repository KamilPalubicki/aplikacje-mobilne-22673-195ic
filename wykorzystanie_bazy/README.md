### Lab 7 - Wykorzystanie bazy danych w aplikacji mobilnej

Do wykonania aplikacji użyte zostały:
- React Native
- Android Studio (Emulator Pixel 3 do testów)
- Kod z poprzedniej aplikacji 

## home.js
![](assets/home.png)

````js
    const HomeScreen = ({ navigation }) => {
      useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                  []
                );
              }
            }
          );
        });
      }, []);
    
      return (
        <View style={[styles.home.container,{ flex: 1 }]}>
          <Mytext text="Wykorzystanie bazy danych" />
          <Mybutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
      );
    };
````

## RegisterUser.js
![](assets/register.png)

![](assets/register2.png)

![](assets/register3.png)

````js
        var db = openDatabase({ name: 'UserDatabase.db' });
        
        const RegisterUser = ({ navigation }) => {
          let [userName, setUserName] = useState('');
          let [userContact, setUserContact] = useState('');
          let [userAddress, setUserAddress] = useState('');
        
          let register_user = () => {
            console.log(userName, userContact, userAddress);
        
            if (!userName) {
              alert('Podaj imie');
              return;
            }
            if (!userContact) {
              alert('Podaj numer');
              return;
            }
            if (!userAddress) {
              alert('Podaj adres');
              return;
            }
        
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                [userName, userContact, userAddress],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'Zarejestrowano',
                      [
                        {
                          text: 'Ok',
                          onPress: () => navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else alert('Registration Failed');
                }
              );
            });
          };
        
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                  <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={{ flex: 1, justifyContent: 'space-between' }}>
                      <Mytextinput
                        placeholder="Podaj imie"
                        onChangeText={
                          (userName) => setUserName(userName)
                        }
                        style={{ padding: 10 }}
                      />
                      <Mytextinput
                        placeholder="Podaj nr kontaktowy"
                        onChangeText={
                          (userContact) => setUserContact(userContact)
                        }
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                      />
                      <Mytextinput
                        placeholder="Podaj adres"
                        onChangeText={
                          (userAddress) => setUserAddress(userAddress)
                        }
                        maxLength={225}
                        numberOfLines={5}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                      />
                      <Mybutton title="Dodaj" customClick={register_user} />
                    </KeyboardAvoidingView>
                  </ScrollView>
                </View>
              </View>
            </SafeAreaView>
          );
        };

export default RegisterUser;

````

## ViewUser.js
### Wyszukiwanie usera po ID (auto-increment)
![](assets/view.png)
### Wyszukiwanie ID które nie istnieje w bazie
![](assets/view2.png)

````js
    var db = openDatabase({ name: 'UserDatabase.db' });
    
    const ViewUser = () => {
      let [inputUserId, setInputUserId] = useState('');
      let [userData, setUserData] = useState({});
    
      let searchUser = () => {
        console.log(inputUserId);
        setUserData({});
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where user_id = ?',
            [inputUserId],
            (tx, results) => {
              var len = results.rows.length;
              console.log('len', len);
              if (len > 0) {
                setUserData(results.rows.item(0));
              } else {
                alert('No user found');
              }
            }
          );
        });
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <Mytextinput
                placeholder="Enter User Id"
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
                style={{ padding: 10 }}
              />
              <Mybutton title="Search User" customClick={searchUser}/>
              <View
                style={{
                  marginLeft: 35,
                  marginRight: 35,
                  marginTop: 10
                }}>
                <Text>Id: {userData.user_id}</Text>
                <Text>Imie: {userData.user_name}</Text>
                <Text>Numer: {userData.user_contact}</Text>
                <Text>Adres: {userData.user_address}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      );
    };

export default ViewUser;       

````

## ViewAllUser.js
### Widok userów w pustej bazie
![](assets/view_all.png)
### Po wypełnieniu bazy
![](assets/view_all2.png)

````js
    var db = openDatabase({ name: 'UserDatabase.db' });
    
    const ViewAllUser = () => {
      let [flatListItems, setFlatListItems] = useState([]);
    
      useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user',
            [],
            (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i)
                temp.push(results.rows.item(i));
              setFlatListItems(temp);
            }
          );
        });
      }, []);
    
      let listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '100%',
              backgroundColor: '#808080'
            }}
          />
        );
      };
    
      let listItemView = (item) => {
        return (
          <View
            key={item.user_id}
            style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Id: {item.user_id}</Text>
            <Text>Name: {item.user_name}</Text>
            <Text>Contact: {item.user_contact}</Text>
            <Text>Address: {item.user_address}</Text>
          </View>
        );
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
              />
            </View>
          </View>
        </SafeAreaView>
      );
    };
    
    export default ViewAllUser;   

````

## DeleteUser.js
### Usuwanie usera poprzez jego ID
![](assets/delete.png)

![](assets/delete2.png)
### Widok po usunięciu
![](assets/delete3.png)

````js
    var db = openDatabase({ name: 'UserDatabase.db' });
    
    const DeleteUser = ({ navigation }) => {
      let [inputUserId, setInputUserId] = useState('');
    
      let deleteUser = () => {
        db.transaction((tx) => {
          tx.executeSql(
            'DELETE FROM  table_user where user_id=?',
            [inputUserId],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'Użytkownik został usunięty',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                alert('Podaj poprawne id');
              }
            }
          );
        });
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <Mytextinput
                placeholder="Enter User Id"
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
                style={{ padding: 10 }}
              />
              <Mybutton title="Usuń" customClick={deleteUser} />
            </View>
          </View>
        </SafeAreaView>
      );
    };
    
    export default DeleteUser;   

````

## UpdateUser.js
![](assets/update.png)
### Wyszukanie user z ID 3
![](assets/update2.png)

![](assets/update3.png)
### Widok po aktualizacji
![](assets/update4.png)

````js
    var db = openDatabase({ name: 'UserDatabase.db' });
    
    const UpdateUser = ({ navigation }) => {
      let [inputUserId, setInputUserId] = useState('');
      let [userName, setUserName] = useState('');
      let [userContact, setUserContact] = useState('');
      let [userAddress, setUserAddress] = useState('');
    
      let updateAllStates = (name, contact, address) => {
        setUserName(name);
        setUserContact(contact);
        setUserAddress(address);
      };
    
      let searchUser = () => {
        console.log(inputUserId);
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where user_id = ?',
            [inputUserId],
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                let res = results.rows.item(0);
                updateAllStates(
                  res.user_name,
                  res.user_contact,
                  res.user_address
                );
              } else {
                alert('No user found');
                updateAllStates('', '', '');
              }
            }
          );
        });
      };
      let updateUser = () => {
        console.log(inputUserId, userName, userContact, userAddress);
    
        if (!inputUserId) {
          alert('Podaj id');
          return;
        }
        if (!userName) {
          alert('Podaj imie');
          return;
        }
        if (!userContact) {
          alert('Podaj numer kontakotwy');
          return;
        }
        if (!userAddress) {
          alert('Podaj adres');
          return;
        }
    
        db.transaction((tx) => {
          tx.executeSql(
            'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
            [userName, userContact, userAddress, inputUserId],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'Pomyślnie zaktualizowano',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else alert('Updation Failed');
            }
          );
        });
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                  behavior="padding"
                  style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Mytextinput
                    placeholder="Podaj id"
                    style={{ padding: 10 }}
                    onChangeText={
                      (inputUserId) => setInputUserId(inputUserId)
                    }
                  />
                  <Mybutton
                    title="Wyszukaj"
                    customClick={searchUser}
                  />
                  <Mytextinput
                    placeholder="Podaj imie"
                    value={userName}
                    style={{ padding: 10 }}
                    onChangeText={
                      (userName) => setUserName(userName)
                    }
                  />
                  <Mytextinput
                    placeholder="Podaj numer"
                    value={'' + userContact}
                    onChangeText={
                      (userContact) => setUserContact(userContact)
                    }
                    maxLength={10}
                    style={{ padding: 10 }}
                    keyboardType="numeric"
                  />
                  <Mytextinput
                    value={userAddress}
                    placeholder="Podaj adres"
                    onChangeText={
                      (userAddress) => setUserAddress(userAddress)
                    }
                    maxLength={225}
                    numberOfLines={5}
                    multiline={true}
                    style={{ textAlignVertical: 'top', padding: 10 }}
                  />
                  <Mybutton
                    title="Zaktualizuj"
                    customClick={updateUser}
                  />
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      );
    };
    
    export default UpdateUser;
````
### Tworzenie zewnętrznej bazy

![](assets/sourcedatabase.png)

### Użycie bazy zewnętrznej
````js
  const db = openDatabase({name: 'UserDatabase.db', createFromLocation: 1});
````

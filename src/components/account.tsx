import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IUser } from "../@types/user";




export const Account = () => {
    const [user, setUser] = useState<IUser>({
      name: 'Neto',
      age: 37,
      city: ' Salvador'
      
    } as IUser);
  
    useEffect(()=>{
      console.log('IDADE NOVA =>',user.age);
    },[user.age])  

    return (
      <SafeAreaView style={styles.container}> 
        <Text style={styles.textTitle} >Meus Dados:</Text>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Idade: {user.age}</Text>
        <Text style={styles.text}>Cidade:{user.city}</Text>
      
        <TouchableOpacity style={styles.button}
          onPress={() => setUser({ ...user, age: user.age + 1 })}
        >
          <Text style={styles.textTitle}>Feliz aniversario</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3bb2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 16,
    borderRadius: 12
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  },
  text: {
    color: '#1a1818',
    fontSize: 18,
    marginBottom: 20
  },
  textTitle: {
    color: '#1a1818',
    fontSize: 26,
    marginBottom: 20
  }
});
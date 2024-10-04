import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
 
export default function Index(){
    return (
        <View style={styles.container}>
        <View>
            <Image source={require('../assets/Logo1.png')}></Image>
            </View>
 
            <Text style={styles.title}>Faça login em sua conta</Text>
            <Text style={styles.subtitle}Email></Text>
            <Text style={styles.buttonText}>Email</Text>
            <TextInput style={styles.input} placeholder="Insira seu endereço de email"/>
            <Text style={styles.buttonText}>Senha</Text>
            <TextInput style={styles.input} placeholder="Insira sua senha" />  
            <TouchableOpacity>
                
                <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            <StatusBar style="auto" />
            <Text style={styles.register}><Link href="/cadastro">Ainda não tem conta? Faça seu cadastro</Link></Text>  
            </View>
    );
}   
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        marginTop: '300',
    },
    title: {
        fontSize: 24,
        marginBottom:20,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    Logo:{
        width: 140,
        height: 142,
        marginTop : -250,
        display: 'flex',    
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        display: 'flex',
        marginLeft: -320,
    },
    input: {
        width: 370,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
 
    },
    button: {
        fontSize: 20,
        textAlign:'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#121212',
        padding: 20,
        borderRadius: 10,
        width:'90%'
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        right: 160,
    },
    forgotPassword: {
        marginTop: 20,
        color: '#OB3BGO',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    register: {
        marginTop: 100,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
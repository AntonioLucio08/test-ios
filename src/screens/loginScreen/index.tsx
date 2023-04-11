import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {useForm, Controller} from "react-hook-form";

interface Props extends StackScreenProps<any,any>{}


const LoginScreen = ({navigation}:Props) => {

    const { control, handleSubmit, formState: { errors } } = useForm<any>({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const onSubmit = (data: any) => {
        try{

        } catch (e:any) {

        } finally {
            navigation.replace('home')
        }
    }
    return (
        <>
            <View
                style={styles.main}
            >
                <KeyboardAvoidingView
                    behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
                >
                    <Controller
                    control={control}
                    rules={{
                        required : true,
                        maxLength: 10,
                        minLength: 4,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text style={styles.label}>email</Text>
                            <TextInput
                                placeholder={'email'}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name={'email'}
                    />
                    {errors.email && <Text>Formato de email invalido</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } })=>(
                            <View>
                                <Text style={styles.label}>Contraseña</Text>
                                <TextInput
                                    secureTextEntry
                                    placeholder={'****'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                        )} name={'password'}/>
                    {errors.password && <Text>Formato de contraseña invalido</Text>}
                    <View style={styles.btnCont}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>

    )
        ;
};

export default LoginScreen;


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        height: '100%',
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "center"
    },
    label: {
        marginTop: 25,
    },
    btnCont: {
        alignItems: "center",
    },
    btn: {
        marginTop: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 50

    }
})

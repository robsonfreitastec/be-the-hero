import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';

import style from './style';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estamos entrando em contato pois gostaria de ajustar no caso ${incident.title}, com o valor ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;

    function navigateBack() {
        navigation.goBack()
    }

    function sendWhatsapp () {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);

    }

    function sendEmail () {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })

    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={style.detailsButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>
            <View style={style.incident}>
                <Text style={[style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.title}</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={[style.incidentValue, { marginBottom: 0,}]}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>
            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>
                
                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendEmail}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
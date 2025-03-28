import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../messages/components/ActionButton";
import SettingsItem from "../components/SettingsItem";

const AccountScreen = ({ navigation }) => { 
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        padding: 15,
        gap: 20,
        backgroundColor: colors.secondaryLightColor,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/25.jpg" }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              elevation: 5,
            }}
          />

          <View>
            <Text style={[fonts.subheading]}>GABRIELA PÉREZ</Text>
            <Text style={[fonts.label2]}>+51 912 345 648</Text>
          </View>
        </View>

        <ActionButton
          onPress={() => navigation.navigate("EDITAR PERFIL")}
          iconName="create-outline"
          text="Editar"
          backgroundColor={colors.intensePrimaryAccent}
          textColor={colors.textColor}
        />

      </View>

      <View
        style={{
          elevation: 5,
        }}
      >
        <View
          style={{
            backgroundColor: colors.intensePrimaryAccent,
            padding: 15,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 5,
            }}
          >
            <Text style={[fonts.h3]}>PREFERENCIAS</Text>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={[fonts.subheading]}>Más Detalles</Text>
              <Ionicons
                name={"caret-forward-outline"}
                size={20}
                color={"#053654"}
              />
            </View>
          </View>
        </View>

        <View style={{ padding: 15, backgroundColor: colors.baseColor }}>
          <Text style={[fonts.subheading]}>TASA DE INTERÉS: 4% - 6% </Text>
          <Text style={[fonts.subheading]}>PLAZO DE TIEMPO: 4 - 12 MESES </Text>
        </View>
      </View>



      <View style={{ gap: 5 }}>
        <SettingsItem
          label="PRIVACIDAD Y SEGURIDAD"
          iconName="shield-half-outline"
        />
        <SettingsItem
          label="PREFERENCIAS NOTIFICACIÓN"
          iconName="notifications-outline"
        />
        <SettingsItem label="CONECCIÓN A BCP" iconName="wallet-outline" />
        <SettingsItem label="IDIOMA" iconName="language-outline" />
      </View>

      <View style={{ gap: 5 }}>
        <SettingsItem label="FAQ" iconName="help-outline" />
        <SettingsItem label="CENTRO DE AYUDA" iconName="information-outline" />
        <SettingsItem
          label="PÓLITICA DE PRIVACIDAD"
          iconName="document-lock-outline"
        />
      </View>
    </View>
  );
};

export default AccountScreen;

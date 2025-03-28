import React from "react";
import { Text } from "react-native-paper";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useSavedProfiles } from "../../../utils/SavedProfilesContext";
import { profiles } from "../../../utils/DummyData";
import { useState } from "react";
import { useRef } from "react";
import Swiper from "react-native-deck-swiper";

export const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const { savedProfiles, toggleSave } = useSavedProfiles();
  const [showOnlySaved, setShowOnlySaved] = useState(false);
  const swiperRef = useRef(null);
  const filteredProfiles = showOnlySaved
    ? profiles.filter((profile) => savedProfiles[profile.id])
    : profiles;

  return (
    <View style={{ flex: 1, backgroundColor: colors.baseColor }}>
      
      <Text style={[fonts.label2, {textAlign: "center", padding:15}]}>
        ¡Desliza el perfil a la derecha para hacer match!
      </Text>

      <Swiper
        ref={swiperRef}
        cards={filteredProfiles}
        renderCard={(item) => (
          <View
            style={{
              backgroundColor: colors.intensePrimaryAccent,
              borderRadius: 10,
              elevation: 5,
marginTop:-30             
            }}
          >
            <Image
              source={{ uri: item.profileImage }}
              style={{
                width: "100%",
                borderRadius:10,
                elevation:5,
                padding:20,
                height: 500,
              }}
            />

            <View style={{padding:15}}>
            <Text style={[fonts.h2]}>{item.name}</Text>
            <Text style={[fonts.subheading]}>{item.age} años | {item.status}</Text>
            <Text style={[fonts.subheading]}>Tasa Ideal: {item.interestRate}</Text>
            <Text style={[fonts.subheading]}>MONTO SOLICITADO: {item.requestedAmount}</Text>
            <Text style={[fonts.subheading]}>Motivos: {item.loanReasonTags}</Text>
            <Text style={[fonts.subheading]}>Plazo Ideal: {item.repaymentTime}</Text>
              </View>

          </View>
        )}
        onSwipedLeft={(index) =>
          console.log("Swiped No:", filteredProfiles[index].name)
        }
        onSwipedRight={(index) => {
          const swipedProfile = filteredProfiles[index];
          console.log("Swiped Yes:", swipedProfile.name);
          toggleSave(swipedProfile.id);
        }}
        backgroundColor="transparent"
        cardIndex={0}
        stackSize={2}
        infinite
      />


      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}
          style={{
            padding: 10,
            backgroundColor: colors.danger,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>NO ES UN MATCH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}
          style={{
            padding: 10,
            backgroundColor: colors.success,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>ES UN MATCH</Text>
        </TouchableOpacity>
      </View>
    
    
    
    </View>
  );
};

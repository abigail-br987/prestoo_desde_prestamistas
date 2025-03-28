import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { formatDistanceToNow, parseISO } from "date-fns"; 

const anuncios = [
  {
    id: "1",
    title: "Nuevo Solicitante Coincide Contigo",
    message: "🔎 Hemos encontrado un prestatario que coincide con tu perfil de inversión. Ha sido movido a Matches. ¡Revisa su solicitud!",
    date: "2025-03-22T15:00:00Z",
  },
  {
    id: "2",
    title: "Pago Recibido (BCP)",
    message: "💰 Has recibido un pago de un prestatario. Tu saldo ha sido actualizado.",
    date: "2025-03-21T09:30:00Z",
  },
  {
    id: "3",
    title: "Retraso en Pago",
    message: "⚠️ Un prestatario ha retrasado su pago. Te notificaremos sobre cualquier actualización.",
    date: "2025-03-20T18:45:00Z",
  },
  {
    id: "4",
    title: "Actualización de Seguridad",
    message: "🔒 Hemos mejorado la seguridad de la app. Asegúrate de actualizar a la última versión.",
    date: "2025-03-18T07:00:00Z",
  },
  {
    id: "5",
    title: "Nuevo Testimonio",
    message: "📝 Un prestatario ha dejado un testimonio positivo sobre ti. ¡Tu confianza sigue creciendo!",
    date: "2025-03-17T16:10:00Z",
  },
];

const AnuncioItem = ({ anuncio }) => {
  const { colors, fonts } = useTheme();

  const dateDistance = formatDistanceToNow(parseISO(anuncio.date), { addSuffix: true });

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.baseColor,
        elevation: 5,
        marginBottom: 10,
        borderRadius: 5,
      }}
      onPress={() => console.log("anuncio")}
    >
      <View style={{ flex: 1 }}>
        <Text style={[fonts.h3]}>{anuncio.title}</Text>
        <Text style={[fonts.label2]}>{anuncio.message}</Text>
        <Text style={[fonts.label2, {textAlign:"right", marginTop:5}] }>{dateDistance}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const AnunciosScreen = () => {
  const { colors } = useTheme();
  const sortedAnuncios = anuncios.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryLightColor,
        padding: 15,
      }}
    >
      <FlatList
        data={sortedAnuncios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnuncioItem anuncio={item} />}
      />
    </View>
  );
};

export default AnunciosScreen;

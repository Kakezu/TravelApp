import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"
import { AntDesign } from '@expo/vector-icons';
import colors from "../assets/colors/colors";


const Details = ({route, navigation}) => {

    const {item} = route.params
    return(
        <View style={styles.container}>
                <ImageBackground
                    source={item.imageBig}
                    style={styles.backgroundImage}>
                    <Pressable style={styles.backIcon}>
                        <AntDesign onPress={() => navigation.goBack()} name="left" size={24} color={colors.white}/>
                    </Pressable>
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.locationWrapper}>
                            <Ionicons name="location-sharp" size={24} color={colors.white}/>
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.descriptionWrapper}>
                    <View style={styles.heartWrapper}>
                        <Ionicons name="heart" size={32} color={colors.orange} />
                    </View>
                    <View style={styles.descriptionTextWrapper}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>PRICE</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>${item.price}</Text>
                                <Text style={styles.infoSubText}> /person</Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>PRICE</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.rating}</Text>
                                <Text style={styles.infoSubText}> /5</Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>PRICE</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.duration}</Text>
                                <Text style={styles.infoSubText}> hours</Text>
                            </View>
                        </View>
                    </View>
                    <Pressable style={styles.buttonWrapper} onPress={() => alert("You booked a trip!")}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </Pressable>
                </View>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        flex: 0.6,
        justifyContent: "space-between"
    },
    descriptionWrapper: {
        backgroundColor: colors.white,
        flex: 0.5,
        marginTop: -20,
        borderRadius: 25

    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    titlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40
    },
    itemTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 32,
        color: colors.white

    },
    locationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    locationText: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: colors.white
    },
    heartWrapper: {
        position: "absolute",
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginLeft: 20
    },
    descriptionTitle:{
        fontFamily: "Lato-Bold",
        fontSize: 24,
        marginBottom: 20
    },
    descriptionText:{
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.darkGray,
        marginRight: 40,
    },
    infoWrapper:{
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: "space-between"
    },
    infoItem:{},
    infoTitle:{
        fontFamily: "Lato-Bold",
        fontSize: 12,
        color: colors.gray,
    },
    infoTextWrapper:{
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 5
    },
    infoText:{
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.orange,
    },
    infoSubText:{
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.gray,
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        color: colors.white,
    },
})

export default Details
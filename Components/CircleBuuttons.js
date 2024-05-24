import { MaterialIcons } from "@expo/vector-icons";
import { Pressable , StyleSheet , View} from "react-native";

export default function Circlebuttons({onPress}){
    return(
        <View styles={styles.CirclebuttonsContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    CirclebuttonsContainer :{
        widt : 84,
        height : 84,
        marginHorizontal :60,
        borderWidth : 4,
        borderColor : "#ffd33d",
        borderRaduis: 42,
        padding: 3,

    } ,
    circleButton :{
        flex : 1,
        justifyContent : "center",
        alignItems:"center",
        borderRaduis: 42,
        backgroundColor : "#fff",
    }
})
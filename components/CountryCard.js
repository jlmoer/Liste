import { View, Text, Image } from "react-native";

export default function CountryCard(props) {
    return (
        <View style={{ margin: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>
                {props.country.name.common}
            </Text>
            <Text>{props.country.capital
                ? props.country.capital[0]
                : "No Capital"}
            </Text>
        </View>
    );
}
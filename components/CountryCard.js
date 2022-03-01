import { View, Text } from "react-native";

export default function CountryCard(props) {
    return (
        <View style={{ margin: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>
                {props.country.name.common}
            </Text>
            <Text>{props.country.capital[0]}</Text>
        </View>
    );
}
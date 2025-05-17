import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function WishlistScreen() {
    return (
        <SafeAreaView className="h-full w-full justify-center items-center">
            <Text className="text-center text-lg">Whislist Coming Soon, Please wait for update..</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});

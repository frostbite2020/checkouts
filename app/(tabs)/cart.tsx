import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CartScreen() {
  return (
   <SafeAreaView className="h-full w-full justify-center items-center">
            <Text className="text-center text-lg">Cart Coming Soon, Please wait for update..</Text>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

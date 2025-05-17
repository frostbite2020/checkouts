import { View } from "react-native";

const SkeletonCard = () => {
    return (
        <View className="w-52 h-60 bg-white rounded-lg m-2 shadow-md">
            <View className="w-full h-28 bg-gray-200 rounded-t-lg" />
            <View className="mt-2 h-4 w-3/4 bg-gray-300 rounded" />
            <View className="mt-1 h-4 w-1/2 bg-gray-300 rounded" />
            <View className="mt-1 h-4 w-1/3 bg-gray-300 rounded" />
        </View>
    )
};

export default SkeletonCard
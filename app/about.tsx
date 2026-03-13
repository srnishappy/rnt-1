import { Link } from 'expo-router';
import { Text, View } from 'react-native';
const about = () => {
  return (
    <View>
      <Text>This is about screen</Text>
      <Link href="/">back</Link>
    </View>
  );
};
export default about;

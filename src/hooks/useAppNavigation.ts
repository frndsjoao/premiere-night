import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, MainTabParamList } from '../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type TabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type AppNavigationProp = CompositeNavigationProp<
  StackNavigationProp,
  TabNavigationProp
>;

export const useAppNavigation = () => useNavigation<AppNavigationProp>();

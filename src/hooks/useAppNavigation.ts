import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, MainTabParamList } from '../routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type TabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

type AppNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  TabNavigationProp
>;

export const useAppNavigation = () => useNavigation<AppNavigationProp>();

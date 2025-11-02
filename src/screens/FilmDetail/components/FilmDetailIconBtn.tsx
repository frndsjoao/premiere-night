import { Check, Plus } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'

export const AddIcon = () => {
  const { colors } = useTheme()
  return <Plus color={colors.textNegative} size={16} />
}

export const AddedIcon = () => {
  const { colors } = useTheme()
  return <Check color={colors.textNegative} size={16} />
}

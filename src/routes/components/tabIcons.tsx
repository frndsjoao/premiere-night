import { Clapperboard, Play } from 'lucide-react-native'

export const WatchlistIcon = ({
  color,
  size,
}: {
  color: string
  size: number
}) => <Play color={color} size={size} />

export const SpotlightIcon = ({
  color,
  size,
}: {
  color: string
  size: number
}) => <Clapperboard color={color} size={size} />

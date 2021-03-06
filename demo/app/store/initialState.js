import { Map, List } from 'immutable'
import SortedMap from 'immutable-sorted-map'
const comparePrice = (currKey, nextKey) => {
  const currPrice = Number(currKey)
  const nextPrice = Number(nextKey)
  if (currPrice < nextPrice) return -1
  else if (currPrice > nextPrice) return 1
  else return 0
}

export default Map({
  error: '',
  book: Map({
    asks: new SortedMap({}, comparePrice),
    bids: new SortedMap({}, comparePrice),
    hasReceivedSnapshot: false,
    queuedMessages: List([])
  }),
  trades: List([]),
  feedStatus: 3 // 0 = CONNECTING, 1 = OPEN, 2 = CLOSING, 3 = CLOSED
})

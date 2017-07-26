import { playMode } from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [], // 顺序播放
  mode: playMode.sequence, // 默认是顺序播放
  currentIndex: -1
}
export default state

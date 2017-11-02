import * as init from './init'
import * as player from './player'
import * as playtime from './playtime'
import * as components from './components'
import * as tabs from './tabs'
import * as share from './share'
import * as theme from './theme'
import * as quantiles from './quantiles'
import * as l10n from './l10n'
import * as error from './error'
import * as chapters from './chapters'
import * as ghost from './ghost'
import * as download from './download'
import * as transcripts from './transcripts'

export default {
  ...init,
  ...player,
  ...playtime,
  ...components,
  ...tabs,
  ...share,
  ...theme,
  ...quantiles,
  ...l10n,
  ...error,
  ...chapters,
  ...ghost,
  ...download,
  ...transcripts
}

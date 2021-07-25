import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import './style.css'
import Reveal from 'reveal.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js'

const deck = new Reveal()
deck.initialize({
  width: "100%",
  height:"100%",
  hash: true, 
  slideNumber: true,
  plugins: [ Markdown, Notes, Highlight, Zoom ]
})
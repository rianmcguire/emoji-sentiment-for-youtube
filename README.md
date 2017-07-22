# Emoji sentiment for YouTube

Replaces all YouTube comments with emoji that match their sentiment.

An extension for Firefox, Chrome, and any other WebExtension-compatible browser.

* Firefox: https://addons.mozilla.org/en-US/firefox/addon/emoji-sentiment-for-youtube/

## Building

* `yarn && yarn build`

## Future work

* The [sentiment](https://github.com/thisandagain/sentiment) package only classifies sentiment on a postive-negative scale. It would be interesting to build a model that could separate 😡 from 😞, and 🤣 from 😍.

var referenceActions = [
  "closes",
  "closed",
  "close",
  "fixes",
  "fixed",
  "fix",
  "resolves",
  "resolved",
  "resolve",
]

var join = function (array, joiner) {
  var trim = function (val) {
    return val.trim()
  }
  var filter = function (val) {
    return val.length
  }
  return array.map(trim).filter(filter).join(joiner)
}

function getReferencesRegex(referenceActions) {
  var joinedKeywords = join(referenceActions, "|")
  return new RegExp("(" + joinedKeywords + ")\\s+(.*)", "gi")
}

var reAsanaRefs = getReferencesRegex(referenceActions)
var reAsanaRefParts = /(https:\/\/app.asana.com\/0\/\d+\/\d+)/gi

function combine(body, footer) {
  var bodyRefs = []
  var footerRefs = []

  if (body) {
    bodyRefs = parseAsanaRefs(body)
  }

  if (footer) {
    footerRefs = parseAsanaRefs(footer)
  }

  return bodyRefs.concat(footerRefs)
}

function objectify(matches) {
  var extract = function (e) {
    return { text: e.substr(e.lastIndexOf("/") + 1), href: e }
  }
  return matches.map(extract)
}

function parseAsanaRefs(input) {
  if (!input) return []
  var refs = []
  var referenceMatch

  while ((referenceSentences = reAsanaRefs.exec(input))) {
    var sentence = referenceSentences[2]

    while ((referenceMatch = reAsanaRefParts.exec(sentence))) {
      refs.push(referenceMatch[1])
    }
  }

  return refs.length ? objectify(refs) : []
}

module.exports = function parse(commit) {
  return combine(commit.body, commit.footer)
}

const test = require('tape')
const ok = require('../index')

test('ok', function (t) {
  t.ok(ok())
  t.end()
})

test('not ok', function (t) {
  t.ok(notOk(true))
  t.end()
})

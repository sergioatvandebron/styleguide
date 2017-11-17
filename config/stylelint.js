module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "plugin/selector-bem-pattern": {
      "preset": 'suit',
      "presetOptions": {
        "namespace": "Van"
      }
    }
  }
}

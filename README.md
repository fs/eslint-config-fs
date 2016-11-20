# eslint-config-fs

This package provides Flatstack's javascript ESLint config as an extensible shared config.

## Usage

1. Install eslint-config-fs package

```bash
npm install eslint-config-fs --save-dev
```

2. Add `"extends": "fs"` to your .eslintrc

```bash
{
  "extends": "fs",
  "rules": {
    // you can override some of the rules below
    "comma-dangle": 0,
    ...
  },
}
```

## Credits

Eslint-config-fs is maintained by [Marat Fakhreev](http://github.com/maratfakhreev).
It was written by [Flatstack](http://www.flatstack.com) with the help of our
[contributors](http://github.com/fs/eslint-config-fs/contributors).

[<img src="http://www.flatstack.com/logo.svg" width="100"/>](http://www.flatstack.com)

# Chartjs-plugin-autoskipfix

Tiny plugin to force the last tick to show with autoskip on, as discussed in [this issue](https://github.com/chartjs/Chart.js/issues/6154). For simplicity, this implementation ignores major ticks.

## Build

```
npm install
npm run build
```

## Usage

Simply add the script to your codebase with either
```javascript
import "chartjs-plugin-autoskipfix";
```
or
```html
<script src="chartjs-plugin-autoskipfix.js"></script>
```

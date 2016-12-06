# InputMask

```html
<input
    type="text"
    pattern="[0-9]{0,10}"
    required
/>
```

```javascript
input.addEventListener('input', function(){
    if(this.validity.patternMismatch) this.value = this.validValue || '';
    this.validValue = this.value;
});
```

## Demo
https://seokirill.github.io/inputMask/

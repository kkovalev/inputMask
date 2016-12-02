## InputMask

```html
<input
    type="text"
    pattern="[0-9]{0,10}"
/>
```

```javascript
input.addEventListener('input', function(){
    if(this.matches(':invalid')) this.value = this.prevValue || '';
    this.prevValue = this.value;
});
```
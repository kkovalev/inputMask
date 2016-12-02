## InputMask

```jvascript
input.addEventListener('input', function(){
    if(this.matches(':invalid')) this.value = this.prevValue || '';
    this.prevValue = this.value;
});
```
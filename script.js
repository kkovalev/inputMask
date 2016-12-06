input.addEventListener('input', function(){
    if(this.validity.patternMismatch) this.value = this.prevValue || '';
    this.prevValue = this.value;
});

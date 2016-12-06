input.addEventListener('input', function(){
    if(this.validity.patternMismatch) this.value = this.validValue || '';
    this.validValue = this.value;
});

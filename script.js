input.addEventListener('input', function(){
    if(this.matches(':invalid')) {
        this.value = this.prevValue || '';
        return;
    }
    this.prevValue = this.value;
});
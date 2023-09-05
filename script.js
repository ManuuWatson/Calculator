
const _buttons = document.getElementsByTagName("button");
const _length = _buttons.length;
const _result = document.getElementById("result");

for (let i = 0; i < _length; i++) {
    _buttons[i].onclick = indicator;
}

function indicator() {
    const _value = this.innerHTML;
    if (_value == "="){
        try {
            _result.value = eval(_result.value);
        } catch (e) {
            _result.value = "0";
        }
        return;
    }
    _result.value += _value;
}

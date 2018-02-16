function insertSpaceOnSelection(e: any, space: number = 4) {
    const selectionStart = e.target.selectionStart;
    const before = e.target.value.substring(0, selectionStart);
    const tab = new Array(space).fill(' ').join('');
    const after = e.target.value.substring(selectionStart);
    e.target.value = before + tab + after;
    e.target.focus();
    e.target.setSelectionRange(selectionStart + space, selectionStart + space);
}
export default insertSpaceOnSelection;
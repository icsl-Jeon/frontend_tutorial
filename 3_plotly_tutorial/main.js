TESTER = document.getElementById('tester');

let xx, yy;
xx = [1, 2, 3, 4, 5];
yy = [1, 2, 4, 8, 10];
let layout = {
    title: 'JBS first example 1',
}
let config = {
    displayModeBar: false
}

Plotly.newPlot(TESTER, [{ x: xx, y: yy }], layout, config)
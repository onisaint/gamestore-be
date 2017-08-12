const pdf = require('html-to-pdf'),
    config = require('../../config/config')

exports.toPdf = function (order, cart) {
    const html = `
        <h1>YOUR CART</h1>
        <div *ngIf="bootstraped">
        <table class="uk-table" >
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
        <tbody>`

    cart.data.forEach(function (item) {
        html += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.meta.display_price.with_tax.value.formatted}</td>
                </tr>
            `
    });

    html += `
            <tfoot>
            <tr>
                <td><h2>Total</h2></td>
                <td><h3><b>${cart.meta.display_price.with_tax.formatted}</b></h3></td>
            </tr>
            </tfoot>
            </tbody>
            </table>
            `
    pdf.convertHTMLString(html, config.development.rootPath + `/order/${order.data.id}` + '.pdf',
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
}
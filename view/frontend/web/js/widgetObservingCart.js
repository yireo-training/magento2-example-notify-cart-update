define(
    [
        'uiComponent',
        'Magento_Customer/js/customer-data'
    ],
    function(Component, customerData) {

        var isCalled = false;

        cartData = customerData.get('cart');
        cartData.subscribe(function (updatedCart) {
            isCalled = true;
            console.log('Updating cart totals');
            console.log(updatedCart);
        });

        return Component.extend({
            'defaults': {
                'isCalled': isCalled
            }
        });
    }
);
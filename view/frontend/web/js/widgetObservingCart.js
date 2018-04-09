define(
    [
        'uiComponent',
        'Magento_Customer/js/customer-data',
        'knockout'
    ],
    function(Component, customerData, ko) {

        var isCalled = false;

        cartData = customerData.get('cart');
        cartData.subscribe(function (updatedCart) {
            isCalled = true;
            console.log('Updating cart totals');
            console.log(updatedCart);
        });

        return Component.extend({
            isCalled: ko.observable('')
        });
    }
);
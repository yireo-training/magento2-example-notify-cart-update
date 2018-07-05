# Example Knockout cart observer
Example Magento 2 module showing how to observe KnockoutJS-based cart updates

## Installation
To install use the following composer command:

    composer require yireo-training/magento2-example-notify-cart-update:dev-master

Next enable the module:

    bin/magento module:enable Yireo_ExampleNotifyCartUpdate
    bin/magento setup:upgrade
    
And flush the cache:

    bin/magento cache:clean

# Proof of concept
After installing the module, every time when the (mini)cart is updated, a dump should be logged to the console.

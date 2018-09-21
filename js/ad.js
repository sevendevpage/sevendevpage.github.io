$(document).ready(function () {

    setTimeout(function () {
        var adsParams = {"ad_unit_id": 107567, "ad_unit_hash": "3a84840acc126b900ad13fbe12a7a9d7"};
        function vkAdsInit() {
            VK.Widgets.Ads('vk_ads_107567', {}, adsParams);
        }
        if (window.VK && VK.Widgets) {
            vkAdsInit();
        } else {
            if (!window.vkAsyncInitCallbacks)
                window.vkAsyncInitCallbacks = [];
            vkAsyncInitCallbacks.push(vkAdsInit);
            var protocol = ((location.protocol === 'https:') ? 'https:' : 'http:');
            var adsElem = document.getElementById('vk_ads_107567');
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.async = true;
            scriptElem.src = protocol + '//vk.com/js/api/openapi.js?159';
            adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
        }
    }, 0);

    setTimeout(function () {
        var adsParams = {"ad_unit_id": 107568, "ad_unit_hash": "b80f06d5da0fdad1b2918a2387d54eff"};
        function vkAdsInit() {
            VK.Widgets.Ads('vk_ads_107568', {}, adsParams);
        }
        if (window.VK && VK.Widgets) {
            vkAdsInit();
        } else {
            if (!window.vkAsyncInitCallbacks)
                window.vkAsyncInitCallbacks = [];
            vkAsyncInitCallbacks.push(vkAdsInit);
            var protocol = ((location.protocol === 'https:') ? 'https:' : 'http:');
            var adsElem = document.getElementById('vk_ads_107568');
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.async = true;
            scriptElem.src = protocol + '//vk.com/js/api/openapi.js?159';
            adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
        }
    }, 0);

});
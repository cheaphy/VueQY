<template>
    <div class="topNavLt">
        <a class="logo" 
            :href="url">
            <img :title="imageAlt" 
            :alt="imageAlt" 
            :src="imageUrl">
        </a>
    </div>
</template>

<script>
    export default {
        name: "uiLogo",
        props: {
            "url": {
                default: "http://www.iqiyi.com",
                type: String
            },
            "imageUrl" : {
                default: "http://www.qiyipic.com/common/fix/public_images/logo108x35_black.png",
                type: String
            }, 
            "imageAlt" : {
                default: "爱奇艺",
                type: String
            }
        }
    }
</script>
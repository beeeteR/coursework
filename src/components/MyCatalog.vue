<template>
    <div class="catalog">
        <div class="catalog-item">
            <h2 class="catalog-item__title">AAAAA</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/14.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
        <div class="catalog-item">
            <h2 class="catalog-item__title">BBBBB</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/12.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
        <div class="catalog-item">
            <h2 class="catalog-item__title">CCCCC</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/13.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
        <div class="catalog-item">
            <h2 class="catalog-item__title">DDDDDDD</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/11.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
        <div class="catalog-item">
            <h2 class="catalog-item__title">EEEEEE</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/10.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
        <div class="catalog-item">
            <h2 class="catalog-item__title">FFFFFF</h2>
            <div class="catalog-item__img-wrapper">
                <img src="../assets/18.jpg" class="catalog-item__img" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.catalog {
    display: grid;
    gap: 1rem;

    .catalog-item {
        position: relative;
        max-height: 300px;
        overflow: hidden;

        &__title {
            position: absolute;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        &__img-wrapper {
            overflow: hidden;
            
            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                object-position: center;
            }
        }
    }

    .catalog-item:nth-child(1) {
        grid-area: 1 / 1 / 3 / 4;
    }

    .catalog-item:nth-child(2) {
        grid-area: 1 / 4 / 1 / 7;
    }

    .catalog-item:nth-child(3) {
        grid-area: 1 / 7 / 1 / 10;
    }

    .catalog-item:nth-child(4) {
        grid-area: 3 / 1 / 3 / 3;
    }

    .catalog-item:nth-child(5) {
        grid-area: 2 / 4 / 2 / 10;
    }
    .catalog-item:nth-child(6) {
        grid-area: 3 / 3 / 3 / 10;
    }
}
</style>
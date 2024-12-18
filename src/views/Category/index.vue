<script setup>
import { getSubCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue'

// 获取基础列表数据渲染
// const goodList = ref([])
// const reqData = ref({
//   categoryId: route.params.id,
//   page: 1,
//   pageSize: 20,
//   sortField: 'publishTime'
// })
// const getGoodList = async () => {
//   const res = await getSubCategoryAPI(reqData.value)
//   console.log(res)
//   goodList.value = res.result.items
// }
// onMounted(() => getGoodList())


// 加载更多 详见无限滚动
// const disabled = ref(false)
// const load = async () => {
//   console.log('加载更多数据咯')
//   // 获取下一页的数据
//   reqData.value.page++
//   const res = await getSubCategoryAPI(reqData.value)
//   goodList.value = [...goodList.value, ...res.result.items]
//   // 加载完毕 停止监听
//   if (res.result.items.length === 0) {
//     disabled.value = true
//   }
// }

</script>

<template>
  <div class="container ">
      <div class="body">
        商品待添加
        <!-- <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id"/> -->
        <GoodsItem />
      </div>
  </div>

</template>



<style lang="scss" scoped>
@import '@/styles/var.scss';

.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
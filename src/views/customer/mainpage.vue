<template>
  <div id="shop-main">
  
    <!-- 页面右上角的登录和注册按钮区域 -->
    <div class="header-buttons">
    <el-button type="primary" plain>登录</el-button>
    <el-button type="primary" plain>注册</el-button>
    </div>

    <!-- 版头轮播图 -->
    <div class="carousel">
      <img v-for="(img, index) in carouselImages" :key="index" :src="img" alt="轮播图" />
    </div>

    <!-- 商品分类 -->
    <div class="category-section">
      <div
        class="category-item"
        v-for="category in categories"
        :key="category.id"
        @click="goToCategory(category.name)"
      >
        <span>{{category.name}}</span>
      </div>
    </div>

    <!-- 商品分区（这里以一个示例分区展示，实际会根据点击分类动态切换） -->
    <div v-if="currentCategory" class="product-section">
      <div class="product-item" v-for="product in productsInCategory" :key="product.id" @click="goToProductDetail(product.id)">
        <img :src="product.image" alt="商品图片" />
        <p>{{product.name}}</p>
      </div>
    </div>

    <!-- 商品详情（根据点击商品动态显示） -->
    <div v-if="currentProduct" class="product-detail">
      <img :src="currentProduct.image" alt="商品详情图片" />
      <h2>{{currentProduct.name}}</h2>
      <p>ID: {{currentProduct.id}}</p>
      <p>{{currentProduct.description}}</p>
      <p>商家: {{currentProduct.seller}}</p>
      <button @click="addToCart(currentProduct)">加入购物车</button>
      <button @click="buyNow(currentProduct)">立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图图片路径数组
      carouselImages: [
        "/images/carousel1.jpg",
        "/images/carousel2.jpg",
        "/images/carousel3.jpg"
      ],
      // 商品分类数据
      categories: [
        {
          id: 1,
          name: "新鲜水果"
        },
        {
          id: 2,
          name: "新鲜蔬菜"
        },
        {
          id: 3,
          name: "水产海鲜"
        },
        {
          id: 4,
          name: "肉蛋"
        },
        {
          id: 5,
          name: "米面"
        },
        {
          id: 6,
          name: "茶"
        },
        {
          id: 7,
          name: "熟食鲜事"
        },
        {
          id: 8,
          name: "其他"
        }
      ],
      // 当前选中的商品分类
      currentCategory: null,
      // 当前分类下的商品数据（示例，实际需从接口获取）
      productsInCategory: [],
      // 当前选中的商品详情数据
      currentProduct: null
    };
  },
  methods: {
    goToCategory(categoryName) {
      // 这里可以添加逻辑，比如根据分类名称请求对应分类商品数据，此处简单设置当前分类
      this.currentCategory = categoryName;
      // 模拟获取对应分类商品数据（实际要调用接口）
      if (categoryName === "新鲜水果") {
        this.productsInCategory = [
          {
            id: 1001,
            name: "苹果",
            image: "/images/apple.jpg",
            description: "新鲜多汁的苹果",
            seller: "果农之家"
          },
          {
            id: 1002,
            name: "香蕉",
            image: "/images/banana.jpg",
            description: "香甜可口的香蕉",
            seller: "热带果园"
          }
        ];
      }
    },
    goToProductDetail(productId) {
      // 根据商品ID获取商品详情数据（实际要调用接口），这里简单模拟查找
      const allProducts = [
        // 合并所有可能的商品数据
      ...this.productsInCategory
      ];
      this.currentProduct = allProducts.find(product => product.id === productId);
    },
    addToCart(product) {
      // 这里实现将商品加入购物车的逻辑，比如调用接口或者操作本地存储等
      console.log(`已将 ${product.name} 加入购物车`);
    },
    buyNow(product) {
      // 实现立即购买的逻辑，比如跳转到下单页面等
      console.log(`立即购买 ${product.name}`);
    },
    goToLogin() {
      // 这里可以添加逻辑跳转到登录页面，比如使用Vue Router进行路由跳转等
      console.log("跳转到登录页面");
    },
    goToRegister() {
      // 这里可以添加逻辑跳转到注册页面，比如使用Vue Router进行路由跳转等
      console.log("跳转到注册页面");
    }
  }
};
</script>

<style scoped>
#shop-main {
  font-family: Arial, sans-serif;
}

.header-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}


.carousel {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.carousel img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel img.active {
  opacity: 1;
}

.category-section {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.category-item {
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}

.product-section {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-item img {
  width: 150px;
  height: 150px;
}

.product-detail {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
}
</style>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

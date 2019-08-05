<template>
  <div class="m-iselect">
    <div class="province">
      <span>按省份选择：</span>
      <m-select
        :select="provinceSelect"
        :value="province"
        :showActive="provinceShow"
        @change_select="changeProvince"
        @change="chooseProvince"
      />
      <m-select
        :select="citySelect"
        :value="city"
        :showActive="cityShow"
        @change_select="changeCity"
        @change="chooseCity"
        :disabled="cityDisable"
      />
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in options" :key="item" :label="item.label" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/select";
import api from "@/api.js";
export default {
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceSelect: {
        name: "省份",
        title: "省份",
        list: []
      },
      citySelect: {
        name: "城市",
        title: "城市",
        list: []
      },
      provinceShow: false,
      cityShow: false,
      options: [
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      searchWord: "",
      loading: false,
      cityDisable: true
    };
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceSelect.list = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  components: {
    MSelect
  },
  methods: {
    changeProvince(flag) {
      if (flag) {
        this.cityShow = false;
      }
      this.provinceShow = flag;
    },
    changeCity(flag) {
      if (flag) {
        this.provinceShow = false;
      }
      this.cityShow = flag;
    },
    chooseProvince(value) {
      this.province = value.name
      this.citySelect.list = value.cityInfoList
      this.cityDisable = false;
    },
    chooseCity (value) {
      this.city = value.name
      this.$store.dispatch('getPosition', value)
      this.$router.push({name : 'index'})
    },

    remoteMethod(e) {
      //   console.log(e);
      //请求数据
    }
  }
};
</script>
<style scoped>
</style>